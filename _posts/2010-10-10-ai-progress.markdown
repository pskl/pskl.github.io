---
layout: post
title:  "The Boom of Large Language Models and Image Generation Tools"
date:   2022-12-21 15:55:26
published: true
listed: true
image: /assets/pictures/ai1.png
permalink: /blog/ai-progress
categories: blog ai
---

# The Boom of Large Language Models and Image Generation Tools 🤯

Since I've read [Superintelligence by Nick Bostrom](https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies) in 2016 I've always been fascinated by the idea that the age of machines would soon be upon us. It seems that we are currently reaching an inflection point. In 2015 when Google released [Deepdream](https://en.wikipedia.org/wiki/DeepDream) the idea of machine creativity captivated my mind and since then the jumps in capability have gotten bigger and bigger. Nowadays the pace of innovation is so fast that I can't keep up and have to take notes.

<div class="post-image">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Humanity is going to make all parts of the world touched by humans beautiful. We are going to create beauty too cheap to meter. And not just an enforced-from-above standard of beauty either, everyone will be able to make their own domain beautiful in the manner of their choosing.</p>&mdash; Rivers Have Wings (@RiversHaveWings) <a href="https://twitter.com/RiversHaveWings/status/1617314715650363393?ref_src=twsrc%5Etfw">January 23, 2023</a></blockquote></div>

In the last 2 years, there has been a significant boom in the development of large language models and image generation tools. These tools have the ability to generate realistic and coherent text and images, respectively, and have garnered a lot of attention from researchers, artists, developers, and the general public. You've probably heard about LLMs, ChatGPT, CLIP, GPT-3, GANs, AGI and all sorts of acronyms that make your head spin.

<img class='post-image' alt="the spirit of transhumanism, painting by James Gurney" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/ai1.png">

## Large Language Models

One of the most well-known large language models is [GPT-3](https://openai.com/blog/gpt-3-apps/) (Generative Pre-training Transformer 3), developed by [OpenAI](https://openai.com/). GPT-3 is a neural network-based language model that has been trained on a massive dataset, allowing it to generate human-like text. It can perform a wide range of language tasks, including translation, summarization, and question answering, with impressive accuracy. [Text really is the universal interface](https://scale.com/blog/text-universal-interface).

In addition to GPT-3, there have been other large language models developed by researchers at universities and companies around the world. These models have the potential to revolutionize natural language processing and have a wide range of applications, from chatbots and virtual assistants to content creation and language translation. The thing that made recent language models particularly game-changing was the introduction of the transformer neural architecture.

### Transformers (CLIP, GPT-X)

The transformer architecture is a type of neural network architecture that was introduced in a 2017 paper ["Attention is All You Need"](https://arxiv.org/abs/1706.03762) by Google researchers. It is particularly well-suited for tasks involving sequential data, such as natural language processing (NLP) and speech recognition.

The key feature of the transformer architecture is the use of self-attention mechanisms. Attention mechanisms allow the model to focus on specific parts of the input, rather than processing the entire input at once. In the transformer, the self-attention mechanism allows the model to weigh the importance of different parts of the input sequence when making a prediction.

In a transformer architecture, the input sequence is processed by a stack of multiple layers, each layer consisting of two sub-layers: a multi-head self-attention mechanism and a fully connected feedforward neural network. The self-attention mechanism allows the model to weigh the importance of different parts of the input sequence and the feedforward neural network allows the model to learn more complex representations of the input.

The transformer architecture also includes a mechanism called positional encoding which allows the model to understand the order of the elements in the input sequence. This is particularly important for sequential data such as natural language sentences.

Overall, the transformer architecture allows the model to efficiently process large amounts of sequential data and achieve state-of-the-art performance on a variety of NLP tasks such as language translation, text summarization, and language modeling. It's really this novel neural architecture that enabled the current breakthrough in AI tech wether its text or image generation.

## Image Generation Tools 🖼

Image generation tools have also gained a lot of attention in recent years. One example is [DALL-E](https://openai.com/blog/dall-e/), also developed by OpenAI, which is a neural network-based image generation tool. DALL-E can generate a wide range of images based on a given text prompt, such as "a two-story pink house with a white fence and a red door." The generated images are often highly realistic and can be used in a variety of applications, including design and art.

<img class='post-image' alt="the soul of transhumanism, painting by Greg Rutkowski" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/ai2.png">

In the past other image generation tools have also been developed, such as [StyleGAN](https://openai.com/blog/stylegan/) and [BigGAN](https://openai.com/blog/biggan/). These tools can generate high-resolution images of people, animals, and other objects with great detail and realism. But recent image generation improvements all have in common the introduction of CLIP.

### wtf is CLIP?

CLIP (Contrastive Language-Image Pre-training) is a machine learning model developed by OpenAI that can understand the relationship between natural language and visual information. It is trained on a large dataset of images and their associated text captions.

The model is pre-trained on this dataset using a process called contrastive learning. During this process, the model is shown two different pieces of information (e.g. an image and a caption) and is trained to determine whether or not they are related. The model is then fine-tuned on specific tasks such as image captioning, image-text retrieval, or text-image retrieval.

One of the key features of CLIP is that it uses a transformer architecture which is similar to the one used in BERT, GPT-2, and other models that have been used for natural language processing (NLP) tasks. This allows the model to efficiently process large amounts of data and achieve state-of-the-art performance on a variety of NLP tasks.

CLIP allows the model to understand the relationship between natural language and visual information, which is useful in tasks such as image captioning and visual question answering. It can also be used in other areas, such as computer vision and natural language understanding. In short CLIP made any "text-to-image" tool possible which seemed impossible not that long ago.

### Diffusion models

At first CLIP was paired with the GANs we knew and loved since the beginning like VQGAN. It gave us a pair of goggles to observe the latent world but soon enough we had to rethink the way we develop, so to speak, the digital photographs of latent concepts. Soon after the release of a new paper diffusion models took over and rapidly replaced GANs, well, [simply because they seem to work a lot better](https://aurorasolar.com/blog/putting-ai-to-the-test-generative-adversarial-networks-vs-diffusion-models/). There we had it: ["Diffusion Models Beat GANs on Image Synthesis"](https://arxiv.org/abs/2105.05233). The [math side of it is not boring too](https://towardsdatascience.com/diffusion-models-91b75430ec2).

### Dreambooth?

The holy grail of AI visual art has always been to generate more variations of the same and back in the days of StyleGAN there were 2 problems: firstly one needed to feed the machine a large collection of the same concept and secondly, after a cumbersome training, the results were far from being aesthetically interesting at all. [Dreambooth](https://arxiv.org/abs/2208.12242), published in August 2022, changes all of that and enables embedding of concepts inside image generation tools in fairly inexpensive way, with very little material and absolutely incredible results. More than that since the fine-tuning process is [rather straightforward](https://bytexd.com/how-to-use-dreambooth-to-fine-tune-stable-diffusion-colab/) it has unlocked [a whole scene of custom diffusion models where hobbyists compete for generating the best results](https://civitai.com/) in the most creative ways possible, mixing and matching different existing networks. The potential use cases for this technique are [numerous and diverse](https://pixelpoint.io/blog/ms-fluent-emoji-style-fine-tune-on-stable-diffusion/), I would say this is currently the most exciting ongoing growth of any AI sector. One thing worth noting is that openness and the DIY ethos of [StabilityAI](https://stability.ai/) was amplified by this accessible Dreambooth technique (authored by Google Research and originally working with their proprietary diffusion engine called Imagen) for which most implementations rely on Stability's [Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion) itself! What a great synergy!

## Implications and Ethical Considerations 🤔

Overall, the recent boom in large language models and image generation tools has exciting implications for a wide range of industries and applications. While there are certainly ethical concerns to consider, the potential for these tools to improve and augment human capabilities is undeniable. It ~~will be~~ is interesting!

### The competitive edge of schizopoasting vs GPT-ass text

LLMs make it easy to generate your average normal descriptive text or basic stories. This evolution brings more value to the specificities of human writing including extreme aversion to cohesive language and [schizoposting](https://knowyourmeme.com/editorials/meme-insider/schizoposting-on-the-rise-trollge-pill-time-and-i-hate-the-antichrist). Humans posters have to post weirder and better, find the outer limits of creative writing where patterns become more intricate, less structured. GPT-ass text has become slur just like [NPC](https://en.wikipedia.org/wiki/NPC_(meme)). Humans are excellent at detecting suble shifts and twists in fellow humans' expression and making most of human writing a platitude will eventually raise the bar for what is considered interesting.

### How might generative image models  affect creativity?

Generative image models have the potential to greatly impact the field of digital art and design by allowing for the creation of highly realistic and unique images. However, it's important to note that the use of these models alone does not necessarily equate to creativity. Creativity involves the ability to come up with novel ideas, and while image models can generate new images, they are still limited by the data they were trained on and the parameters set by the designer. Therefore, the effect of generative image models on creativity will likely depend on how they are used and integrated with human creativity.

<div class="post-image">
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">ML systems are just matrix algebra training data soup, and will only ever be as good as their training data. This is why AlphaZero is only as good as human players at Chess and Go :)</p>&mdash; flaw (@flawedaxioms) <a href="https://twitter.com/flawedaxioms/status/1609625028458582016?ref_src=twsrc%5Etfw">January 1, 2023</a></blockquote>
</div>

### Which industries will be affected first?

#### Big tech

These technologies have a great potential to [shuffle the cards](https://tanay.substack.com/p/big-tech-and-generative-ai) for a lot of the big actors in the tech industry.

#### Tech adjacent sectors

There are other industries that are likely to be affected by generative image models in the near future.

- Digital art and design: Generative image models can be used to create highly realistic images, which could be used in a variety of digital art and design projects.

- Film and video game production: image models can be used to create realistic, computer-generated characters, environments, and special effects. There are indie proof-of-concepts pretty good at [making concept art](https://www.reddit.com/r/StableDiffusion/comments/10vslkw/charturnerv2_released/).

- Advertising and marketing: image models can be used to generate photorealistic images for ads and marketing campaigns.

- [Architecture](https://www.dezeen.com/2022/11/16/ai-design-architecture-product/) and urban planning: image models can be used to generate photorealistic images of architectural designs, which could be used for presentations and visualizations.

- Fashion and retail: image models can be used to generate images of clothing and accessories, which could be used for online shopping and virtual try-on features.

- Automotive and industrial design: image models can be used to generate images of vehicles and industrial products, which could be used for visualization and marketing purposes.

These are some of the examples of the industry that will be affected by image models, but the use cases of these models are diverse and varied. The job of a software engineer is also changing dramatically and the future of the job market remains unclear.

#### Where to experiment with these new technologies?

All these new shiny toys have in common the fact that they necessitate beefy GPUs to run. In the case of the language models like GPT-3 they can be [very unwieldy](https://www.reddit.com/r/OpenAI/comments/u572t6/possible_to_run_openai_gpt3_models_like_davinci/) for the average consumer and thus require to be used as a service. On the other hand image generation networks can be trained AND used on custom servers or locally.

<img class='post-image' alt="ethereal field of  gigantic mega computers with data cables, painting by Greg Rutkowski" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/ai3.png">

##### Local PC

Buy a cool expensive consumer GPU for your tower PC. The problem is that the minute you buy it its value starts decreasing and slowly drifting away. Maintaining a local environment for the GPUs can be tedious and sometimes re-provisioning would be faster with a cloud solution where you can just scrap the entire thing and start anew.

##### Using SaaS tools

This area is moving extremely fast and includes players that have rapidly become household names. These are the companies making the headlines and being used by journalists to comment on the advent of the machine age. Besides the obvious convenience they do promote a monolithic approach to creative walled gardens.

- [ChatGPT](https://chat.openai.com): one of the fastest growing userbase in recent tech history
- [Midjourney](https://www.midjourney.com): a sort of meta cohesive customer driven art direction which I have yet to enjoy
- [Dall-E 2](https://openai.com/dall-e-2/): the OG heavily censored image magic box

##### Running your own models using Cloud GPUs

In this case you would rent GPUs in the cloud and pay hourly for your usage. Here are some providers I have tried so far:

###### [Colab](colab.research.google.com/)

|PROS :white_check_mark:| CONS :no_entry_sign: |
|:--------------|:-----|
| Really good community support | Google |
| Rather cheap | Not very user friendly|
|  | Not good for long-running workflows |
||Paid-tier got recently nerfed |
||No file persistence|

###### [Paperspace](https://console.paperspace.com/signup?R=237JXZT)

|PROS :white_check_mark:| CONS :no_entry_sign: |
|:--------------|:-----|
| Kinda expensive| Lots of bugs |
| Lots of cool features | The "official" adapted notebooks are buggy af :/ |
| Gradient Notebook IDE is cool | Limited availability of machines|

###### [JarvisLabs](https://cloud.jarvislabs.ai/)

|PROS :white_check_mark:| CONS :no_entry_sign: |
|:--------------|:-----|
| Cheap rates | Shitty barebones UI |
| Pre-defined images like Automatic1111's ||


_PS: this article was written using LLMs, my own brain, my beloved [HHKB](https://hhkeyboard.us/hhkb/pro-hybrid) and illustrated with Stable Diffusion 1.5._