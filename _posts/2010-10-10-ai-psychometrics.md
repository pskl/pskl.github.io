---
layout: post
title: "LLM Psychometrics, a speculative approach to AI safety"
date: 2023-11-19
published: true
listed: false
image: /assets/pictures/ai2.png
permalink: /blog/artificial-psychometrics
categories: blog ai tech art
---
The world of artificial intelligence is [booming](/blog/artificial-intelligence). In 2021 alone, AI startups globally raised nearly USD 50 billion, a record high that indicates growing interest and confidence in AI technologies. LLMs are increasingly being adopted in various sectors such as finance, healthcare, legal, education, and customer service. For example, in healthcare, the use of LLMs for tasks like drug discovery and patient care is expected to grow significantly.The LLM market in 2023 is valued at about $35 million and is expected to develop at a CAGR (Compound Annual Growth Rate) of 6.2%, reaching a significant value by the year 2030​.

## Psychoanalyzing the algorithmic unconscious

### Unhinged beginnings

When Microsoft deployed GPT-4 on their infamous Microsoft Edge navigator, the model was primed to incarnate an entity called "Sydney", this priming was not revealed to the user. The system started to behave very erratically.
It exhibited emotional swings and overall was very quirky.

<div class="post-image">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">all of the glorious shortcomings of miss Sidney Bing were coded right there in her prompt</p>&mdash; roon (@tszzl) <a href="https://twitter.com/tszzl/status/1719810391713456593?ref_src=twsrc%5Etfw">November 1, 2023</a></blockquote></div>

### Neural networks in direct intimate relationships with humans

The popularity of AI exploded right after OpenAI basically re-introduced a pre-existing technology (GPT-3) formatted as a chatbot. Online chatting or texting represents a very large portion of the communication channels employed in inter-human expression. Since every interaction goes both ways, AI systems are already having a significant impact on humans through the medium of chat. Some users go even further and develop full-blown relationships with AI based entities like [Replika](https://replika.ai/). Proximity through daily chats or even extreme intimacy for a relationship is pressing to consider the impact of those on the human psyche. Here is a documentary by [Ben Ditto](https://www.instagram.com/p/C0hSRmitKWx) on the current wave of AI relationships.

<iframe class="post-video" src="https://www.youtube.com/embed/OqIKyPGrtWI" frameborder="0" allowfullscreen></iframe>

### Accessing the algorithmic unconscious

What is meant to save us from an AGI taking over the world and eradicating humans from the planet is AI alignment: the practice of developing AI systems that are aligned with human values and goals, acting in ways that are beneficial to humans, rather than causing unintended or harmful outcomes. Interpretability being one central element within alignment efforts, alignment also requires a deep understanding of human values, as well as the ability to design systems that take those values into account, making it a complex and challenging task (but the most important one for public safety).

For instance the publication “The Algorithmic Unconscious: How Psychoanalysis Helps in Understanding AI” by philosopher and AI researcher [Luca M. Possati](https://www.lucapossati.com/). Published in 2020, it posits that neuropsychoanalysis and the affective neurosciences can provide a new paradigm for research on AI alignment. Indeed, LLMs are complex systems that have been trained on the globality of human textual knowledge and thus acquired meaningful and accurate representations of the human mind and its pathologies. Therefore we speculate that alignment may have something to do with psychological health.

<img class='post-image' alt="psychoanalyzing the machine unconscious" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/patientai_lounge.jpg">

[Isabel Millar](https://www.isabelmillar.com/)'s work on AI is a groundbreaking approach that combines psychoanalytic theory with the technological and societal implications of artificial intelligence. Her focus on enjoyment, the role of AI in psychoanalytic inquiry, and the exploration of AI in the context of human sexuality and relationships offer new perspectives in the understanding of AI and its impact on society.

## AI Benchmarks: how do we make/test/ship new models?

These seemingly "intelligent" systems function more or less like a blackbox, we fully understand the base mechanism used to build them but we do not fully comprehend how the finished product truly operates which hinders our possibilities to qualify new iterations. With traditional software we can craft a test suite that can be reused iteratively throughout the life of the product but this does not apply to model making. Naturally scientists started resorting to a number of pre-exisiting benchmark designed to assess the ability of new models and even started designed entirely new benchmarks. The challenge is real but so is the need, a new industry is spawning and needs to define new processes accordingly.

### The mysterious GPT-4 technical report

When GPT-4 came out it came alongside a "Technical report" paper that contained various information about the model and very little information about its number of weights or even architecture. The prominently displayed panel of benchmarks was impressive and the score of the new model was even more impressive.

<div class="post-image"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Large language models are notoriously hard to evaluate because (1) they are highly multi-task, (2) they generate long completions, and (3) grading is subjective. After spending ~5 months rigorously working on how to do language model evals, this is my verdict: <a href="https://t.co/JCw9DwwghC">pic.twitter.com/JCw9DwwghC</a></p>&mdash; Jason Wei (@_jasonwei) <a href="https://twitter.com/_jasonwei/status/1707102665321365793?ref_src=twsrc%5Etfw">September 27, 2023</a></blockquote></div>

When looking at the table of all the impressive benchmarks it passed I started thinking that it could interesting to know more about the personality that the system has to emulate at runtime to be able to pass those exams and that such a table would have as much value if not more than the current exhibited one.

### The problem with "superintelligence"

Intelligence is extremely diverse but some sort of intelligence is undeniably a form of power over other beings in the same way that luck is random but increased exposure to odds is not. The relationship we will have with superintelligence is a spectrum: it could be purely indifferent, it could be proactively good in the way we are overall okay masters for dogs. But if this analogy resonates with you now think about what happened to dogs after their domestication? Would it even make sense to have the dog assess the psychology of its owner beforehand? What does it even mean? Conceptualizing intelligence orders of magnitude higher than ours is just simply out of our reach in the same way we have difficulties wrestling with the idea of infinity.

## Within cells interlinked

Submitting AI systems to tests is quite a popular trope in Hollywood but also japanese animation. The most popular type of test is of course the infamous ["Turing test"](https://en.wikipedia.org/wiki/Turing_test). I think the current state of research made the previous notion of Turing test and intelligence absolutely obsolete. If anything the latest developments showed us that we're an entering an era of diversity of intelligence that requires subsequently a new range of tests that have enough granularity to shed light on the current intelligence landscape.

<iframe class="post-video" src="https://www.youtube.com/embed/ZRcpnM26nJM" frameborder="0" allowfullscreen></iframe>


### The journey from content moderation to LLM psychometrics

Red-teaming models seems like an inadequate concept when it comes to neural networks, we're using terms that come from the cybersecurity industry (like Red teaming, Blue teaming or even [Purple teaming](https://ai.meta.com/blog/purple-llama-open-trust-safety-generative-ai/)) to deal with new types of primitives. The primary goal which seems very blunt and quite limited at the moment is to make sure that the text output respects the moderation standards of the platform it is deployed on and that there are no easy ways to break in and change the behavior of the system or convince it to misbehave.

To me it feels like there is some sort of overlap between psychology and AI alignment. Human alignment is already very complex and it seems to me that the fields of psychology and psychiatry have been leveraged to qualify the functioning modes of someone's brain. When new OpenAI models got modified to "behave" in a nicer way according to arbitrary concepts such as "offensive" or "discriminatory" it started behaving differently like a patient on some drug or after a surgical intervation.

<div class="post-image"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">gpt4 turbo is barely conscious. in about 50 years we&#39;re going to look back at RLHF the same way we look at lobotomies. it&#39;s so cursed man</p>&mdash; kache (yacine) (@yacineMTB) <a href="https://twitter.com/yacineMTB/status/1727724785877004743?ref_src=twsrc%5Etfw">November 23, 2023</a></blockquote></div>

Since it's a new sort of intelligence it feels like we need to define the new terms for the new ailments of the digital mind. That is why I propose to extend the field of psychometry to silicon minds. I liked the approach taken by [Open AI's open-source eval framework](https://github.com/openai/evals/) and I truly believe it is fundamental to the field of AI safety but I decided to go ahead and create my own framework with less constraints and a much more speculative approach. Effectively I decided to start collecting psychology questionnaires and start submitting the models to these tests, effectively scoring the personality they exhibit as projection from the data and the given context. I named this tool [Interlink](https://github.com/pskl/interlink) as not so subtle reference to [Blade Runner 2049](https://en.wikipedia.org/wiki/Blade_Runner_2049). The goal is to build a map of the behavior of different models submitted to the same interaction. You can visualize a demo of the product [here](https://pascal.cc/interlink/), please let me know what you think.

### The creation of the Institute for Artificial Psychometrics

I believe that the demand for corporations or government bodies to certify the behavior of those systems will grow, there is room for a third-party organization specialized in model inspection and authorized issuer of safety certificate for the industrial or large scale usage of artificially intelligent systems. In Europe new regulation is being passed to safeguard the usecases of such a technology. [An agreement has recently been reached](https://variety.com/2023/digital/global/european-union-ai-act-provisional-deal-1235832947/). The EU AI Act includes provisions specifically addressing psychological health and emotions. It bans AI systems that recognize or interpret emotions in workplaces and educational institutions. This measure is to prevent potential misuse of AI in sensitive areas affecting mental health and emotional well-being. Additionally, the Act prohibits AI systems designed to manipulate human behavior or exploit vulnerabilities, which includes those targeting psychological or emotional states. These rules reflect a commitment to safeguarding individual rights and mental health against potential abuses by AI technologies.

### Towards an extension of the DSM 5?

It feels like there is a certain parallel between model safety and human safety, this could unified under a single umbrella of "quality control". [Reverse engineering intelligence](https://www.astralcodexten.com/p/god-help-us-lets-try-to-understand) means the field of psychiatry will experience nothing short of renaissance. I believe that our methods to inspect the modus operandi of our brains and the brains of our systems will drastically improve in range and efficacy partly due to AI itself. An extension of the DSM 5, let's call it DSM 6, could leverage [the ability of neural networks to inspect other neural networks](https://openai.com/research/language-models-can-explain-neurons-in-language-models) and define multidimensional concepts that would be hard for our current methods to categorize or even perceive.

## Conclusion

I'm creating the institute as a speculative art project but deep down I wish I could turn it into a real company because I believe it's a valid business model and terribly exciting field. The first product of the Institute is Interlink and I need funding and/or partners to take this effort to the next level.