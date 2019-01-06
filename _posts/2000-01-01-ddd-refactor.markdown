---
layout: post
title:  "Using Domain Driven Design as a crutch for large refactors in Ruby applications"
date:   2018-12-21 15:53:26
published: true
listed: true
image: /assets/pictures/gorilla.jpg
permalink: /blog/domain-driven-design
categories: blog design
---

_This is the transcript of a talk I gave at the [Berlin Ruby user group](http://berlin.onruby.de/) on 03/01/18. You can download the slides [here](http://pascal.cc/assets/ddd_slides.pdf)._

Ruby and Ruby on Rails applications as well as most types of [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming) applications naturally tend to grow into [big balls of mud](https://en.wikipedia.org/wiki/Big_ball_of_mud) over time and the main job of software architects is to curb the entropy curve. Domain Driven Development is one of the tools that can help tackle complexity. Although it is very rare to come across the opportunity to implement DDD principles from inception it is in practice very comfortable to rely on those principles to guide the refactoring process and avoid costly mistakes.

In this article I will first explain very swiftly what DDD is and which underlying concepts are essential and helpful for refactorings, then I will detail a specific case I've encountered.

## The usual refactor nightmare :skull:

> “You reach for the banana and get the entire gorilla” :monkey:

The decaying of code is most of the times inevitable and leads to code that becomes increasingly complex to maintain or even understand. Now the role of the developer in this case is to re-explore the business processes to update and simplify the model that the code is trying to emulate.

## What is Domain Driven Design (or Domain Driven Development)

DDD is not a coding paradigm like OOP or Functional programming. DDD does not really dictate precise workflows and thus is compliant with other recommended practices such as Test Driven Development. The [initial book](https://www.amazon.de/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/) that sparked this new idea by Eric Evans is very long and goes into a lot of details by subsequently specifying new patterns. Overall the book outlines: DDD is primarily about modeling a Ubiquitous Language in an explicitly bounded context. It overlaps a bit with similar great concepts such as [Clean Architecture](https://www.amazon.de/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164) or Hexagonal Architecture.

### What is a bounded Context? :thinking:

A bounded context is a "semantic contextual boundary". They usually represent the areas of expertise of the company or project you're working with. For example the [8fit](https://8fit.com/) mobile application helps users reach their goal in nutrition and workouts so those are a natural fit for bounded contexts.

### What is an Ubiquitous language? :thinking:

A ubiquitous language is the common language that should be shared by every stakeholder in a specific bounded context.

It is important to make sure that your developers are focused on the right "core" domains of the business and they should not spend too much time on domains that could be externalized. The ubiquitous language is developed as a joint effort between the technical experts and the business experts; it is the crutch :tada:

<img class='post-image' src="http://pascal.cc/assets/pictures/ubiquitous_language.png">

### Links between contexts need to be strategical

Context maps define the relationship (or the link) that your bounded contexts share, there a few but here are some:

- *Conformist*: the downstream context is following the language of the upstream one blindly and has to "conform" to it
- *Open Host Service*: the upstream context exposes a set of handy and documented services to the other
- *Anti Corruption Layer*: the downstream system implements a layer of communication to prevent the upstream language from contaminating its own

<img class='post-image' src="http://pascal.cc/assets/pictures/context_mapping.png">

### How to design with DDD in mind?

Another one of the key concepts is Event Storming. It might sound like one of those numerous productivity hacks that end up being a fad but it is surprisingly effective and I'm generally very allergic to "productivity" techniques especially those that involve more than 2 persons.

- DDD is about exploring bounded contexts in order to build domain models, it's about __modelling the business__
- No single person in your organization knows the domains perfectly
- Event storming is beneficial for all the stakeholders to build a mental model

This is exactly why you need to put all the key stakeholders in one room and trigger a collective domain exploration. The result of this domain exploration should give a rough domain blueprint that you can later refine. The exact methodology can be found [here](https://en.wikipedia.org/wiki/Event_storming) and mainly involves proper naming of so-called "domain events".

## A case study

Let's take look at a real life business problem: the [8fit](https://8fit.com/) backend application is a Ruby on Rails monolith interfaced with a frontend mobile application written in Typescript using React Native.

### Current state

The backend was first and foremost designed with a standard Rails CRUD architeture with each endpoint more or less mapping one to one with the underlying models. Over time and since a lot of the features were firstly built in the app itself the frontend code had the responsability to assemble and handle compound objects created from those base elements with more or less success. This signals the acummulation of domain logic in the frontend code and ultra tight coupling. :warning:

> “A common mistake made when using REST is to design resources that directly reflect the Aggregates in the domain model. Doing this forces every client into a Conformist relationship, where if the model changes shape the resources will also. Instead resources should be designed synthetically to follow client-driven use cases.” - __Vaughn Vernon, Domain-Driven Design Distilled (2016)__

It is important and tricky to be able to detect at the right moment the emergence of domain models. Nevertheless the [YAGNI principle](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) and the pragramtic ethos of the common Ruby developer outline that you should never over-engineer in the first place. Although it can help a lot to detect when your architecture would benefit from the creation of new domain models and determine where its creation is most appropriate.

<img class='post-image' src="http://pascal.cc/assets/pictures/8fit_ddd_1.png">

Each RoR model maps 1-to-1 with a table in our database: workout_templates, workouts, meals, recipes, ingredients...

### Proposed modeling solutions

By interacting with domain experts in the company (such as trainers, nutritionists, product managers...) we propose the introduction of bounded contexts and the definition of an ubiquitous language in each of those domains.

<img class='post-image' src="http://pascal.cc/assets/pictures/8fit_ddd_2.png">

In this draft the nutrition bounded context contains the following aggregates: `MealPlan` and `RecipeBook` for instance. The `Recipebook` is aggregating the `Recipe` and the `Ingredient` objects to deliver a more comprehensive entity downstream.

The workouts bounded context contains the following "aggregates": workout program, progress... For instance a `Program` is an object that aggregates the underlying resources used to create the workouts for the user: templates, warmups, cooldowns, sets, steps... This enables us to do most of the heavy lifting backend side and enables a more comprehensive communication between the upstream and downstream parts of our architecture.

The internal communication in each of the domain will rely on the introduction of domain events (using the [Pub/Sub pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) such as: `WorkoutCompleted` or `MealCompleted`.

### What about design patterns?

Doing DDD by the book is possible and recommended. [The reference manual](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software-ebook/dp/B00794TAUG) specifies a number of design patterns that I will not cover in this article.

### Events allow a nice and smooth communication contract

Events are the life of your domains. Implementing event systems can dramatically reduce the coupling of your architecture components and can be implemented on top of an existing system.

Relying on accurate domain events can enable you ultimately to leverage the power of [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html). This is the final form of DDD in all its glory but the key takeway is that there are different levels of adherence to DDD principles.

## Relationship with the Ruby ecosystem

### POROs

Plain old Ruby objects are the perfect tool for that job. They should be explicit and well structured.

Tons of Ruby built in tricks to the rescue. Ruby's terseness and expressiveness makes it perfect to build readable objects that contain the business logic in your area of expertise.

```ruby
module Workouts
  class Program < Struct.new(:level, :phase)
  end
end
```

[Dry-rb](https://dry-rb.org/) and [ROM-rb](https://rom-rb.org/) are nifty little libraries that extend the toolset offered by Ruby.

### Wisper

Wisper is a very clean gem with zero dependencies so it won't bloat your bundle. It implements basic Pub/Sub functionalities that will enable you to start decoupling parts of your application.

```ruby
# register handlers
Wisper.subscribe(MealUpdateLogger, scope: Meal)

# broadcast event in a model
include Wisper::Publisher
broadcast(:meal_completed, meal.id)

# in the handler
def self.meal_completed(meal_id)
  # do stuff and maybe persist something
end
```

### Rails Event Store

If you plan on implementing Domain Events (which is a great idea) you will probably find this gem very helpful because it will enable your team to hit the ground running. It focuses on enabling domain events features and persistence. It was written and is still maintained by the [Arkency team](https://arkency.com/). :warning: Rails Event Store also implements Pub/Sub.

## TL;DR

- You don't __HAVE TO__ read the > 500 pages of the founding book: DDD is about building a ubiquitous language in bounded contexts.
- If you're completely lost during a refactor it might be a good idea to do event storming sessions with all the required stakeholders (domain experts, product people, developers...). It is costly but essential to rethink your architecture.
- If you already have a clear idea of the domain logic you can proceed with isolating/creating possible new aggregates and try to loosely couple the components of your architecture. Start first to create good old Ruby objects and see where that leads your code.

## Links

- [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)
- [Trailblazer](https://github.com/trailblazer/trailblazer)
- [Sequent.io](https://www.sequent.io/)