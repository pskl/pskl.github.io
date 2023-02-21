---
layout: post
title:  "The Boom of Large Language Models and Image Generation"
date:   2022-12-21 15:55:26
published: true
listed: false
image: /assets/pictures/ai2.png
permalink: /blog/ai-progress
categories: blog ai
---
In 2015 when Google released [Deepdream](https://en.wikipedia.org/wiki/DeepDream) the idea of machine creativity captivated my mind and ever since I've read [Superintelligence by Nick Bostrom](https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies) in 2016 I've always been fascinated by the idea that the age of machines would soon be upon us. The concept is scary, grandiose, ethereal and a fertile ground for science (and personal) fiction. Progress was somewhat slow but it seems that we are currently reaching an inflection point, this area of interest dear to me has become so prolific and fast-paced that I feel the need to start taking notes to declutter a bit my mental map. __Paradigm shit after paradigm shift the giant leaps peculiarly keep coming!__

<div class="post-image">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Humanity is going to make all parts of the world touched by humans beautiful. We are going to create beauty too cheap to meter. And not just an enforced-from-above standard of beauty either, everyone will be able to make their own domain beautiful in the manner of their choosing.</p>&mdash; Rivers Have Wings (@RiversHaveWings) <a href="https://twitter.com/RiversHaveWings/status/1617314715650363393?ref_src=twsrc%5Etfw">January 23, 2023</a></blockquote></div>

In the last 2 years, there has been a significant boom in the development of large language models and image generation tools. These tools have the ability to generate realistic and coherent text and images, respectively, and have garnered a lot of attention from researchers, artists, developers, and the general public. You've probably heard about __LLMs__, __ChatGPT__, __CLIP__, __GPT-3__, __GANs__, __AGI__ and all sorts of acronyms that make your head spin.

<img class='post-image' alt="the spirit of transhumanism, painting by James Gurney" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/ai1.png">

## Large Language Models

One of the most well-known large language models is [GPT-3](https://openai.com/blog/gpt-3-apps/) (Generative Pre-training Transformer 3), developed by [OpenAI](https://openai.com/). GPT-3 is a neural network-based language model that has been trained on a massive dataset, allowing it to generate human-like text. It can perform a wide range of language tasks, including translation, summarization, and question answering, with impressive accuracy. [Text really is the universal interface](https://scale.com/blog/text-universal-interface).

In addition to GPT-3, there have been other large language models developed by researchers at universities and companies around the world. These models have the potential to revolutionize natural language processing and have a wide range of applications, from chatbots and virtual assistants to content creation and language translation. The thing that made recent language models particularly game-changing was the introduction of the transformer neural architecture.

### Transformers (CLIP, GPT-X)

The transformer architecture is a type of neural network architecture that was introduced in a 2017 paper ["Attention is All You Need"](https://arxiv.org/abs/1706.03762) by Google researchers. It is particularly well-suited for tasks involving sequential data, such as natural language processing (NLP) and speech recognition.

The key feature of the __transformer architecture__ is the use of __self-attention mechanisms__. Attention mechanisms allow the model to focus on specific parts of the input, rather than processing the entire input at once. In the transformer, the self-attention mechanism allows the model to weigh the importance of different parts of the input sequence when making a prediction.

In a transformer architecture, the input sequence is processed by a stack of multiple layers, each layer consisting of two sub-layers: a multi-head self-attention mechanism and a fully connected feedforward neural network. The self-attention mechanism allows the model to weigh the importance of different parts of the input sequence and the feedforward neural network allows the model to learn more complex representations of the input.

The transformer architecture also includes a mechanism called positional encoding which allows the model to understand the order of the elements in the input sequence. This is particularly important for sequential data such as natural language sentences.

Overall, the transformer architecture allows the model to efficiently process large amounts of sequential data and achieve state-of-the-art performance on a variety of NLP tasks such as language translation, text summarization, and language modeling. It's really this novel neural architecture that enabled the current breakthroughs in AI tech wether its text or image generation.

## Image Generation Tools 🖼

Image generation tools have also gained a lot of attention in recent years. One example is [DALL-E](https://openai.com/blog/dall-e/), also developed by OpenAI, which is a neural network-based image generation tool. DALL-E can generate a wide range of images based on a given text prompt, such as "the soul of transhumanism, painting by Greg Rutkowski". The generated images are often highly realistic and can be used in a variety of applications, including design and art.

<img class='post-image' alt="the soul of transhumanism, painting by Greg Rutkowski" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/ai2.png">

In the past other image generation tools have also been developed, such as [StyleGAN](https://openai.com/blog/stylegan/) and [BigGAN](https://openai.com/blog/biggan/). These tools can generate high-resolution images of people, animals, and other objects with great detail and realism. But the recent image generation improvements all have in common the introduction of CLIP, the mysterious codename of a very special transformer.

### WTF is CLIP???

CLIP (Contrastive Language-Image Pre-training) is a machine learning model developed by OpenAI that can understand the relationship between natural language and visual information. It is trained on a large dataset of images and their associated text captions.

The model is pre-trained on this dataset using a process called contrastive learning. During this process, the model is shown two different pieces of information (e.g. an image and a caption) and is trained to determine whether or not they are related. The model is then fine-tuned on specific tasks such as image captioning, image-text retrieval, or text-image retrieval.

One of the key features of CLIP is that it uses a transformer architecture which is similar to the one used in BERT, GPT-2, and other models that have been used for natural language processing (NLP) tasks. This allows the model to efficiently process large amounts of data and achieve state-of-the-art performance on a variety of NLP tasks.

__CLIP allows the model to understand the relationship between natural language and visual information__, which is useful in tasks such as image captioning and visual question answering. It can also be used in other areas, such as computer vision and natural language understanding. In short CLIP made any "text-to-image" tool possible which seemed impossible not that long ago.

### Diffusion models

At first (essentially last year, in 2021) CLIP was paired with the [GANs](https://en.wikipedia.org/wiki/Generative_adversarial_network) we knew and loved since the beginning like [VQGAN](https://ai.googleblog.com/2022/05/vector-quantized-image-modeling-with.html). I remember very fondly the summer of 2021 spending all night long playing with __CLIP+VQGAN__, barely sleeping and tripping in front of this nascent aesthetic. It gave us a pair of goggles or a microscope to observe the latent world but soon enough we managed to __optimize the way we develop the digital photographs of latent concepts__. Indeed soon after the release of a new paper diffusion models took over and rapidly replaced GANs, well [simply because they seem to work a lot better](https://aurorasolar.com/blog/putting-ai-to-the-test-generative-adversarial-networks-vs-diffusion-models/). There we had it, a new micro-extinction event in the machine-learning industry: ["Diffusion Models Beat GANs on Image Synthesis"](https://arxiv.org/abs/2105.05233). Depending on your level of expertise you can dig into the [math side of it](https://towardsdatascience.com/diffusion-models-91b75430ec2) which sheds some light on the denoising process.

### Dreambooth?

One of the holy grails of AI visual art has been to generate more variations of the same and back in the days of StyleGAN there were 2 problems: firstly one needed to feed the machine a large collection of the same concept and secondly, after a cumbersome training, the results were far from being aesthetically interesting at all. My production for the exhibition of 2020 called [Serotonin Depletion](/serotonin-depletion) was based on Style-GAN2 and I was not very happy with the results. [Dreambooth](https://arxiv.org/abs/2208.12242), published in August 2022, changes all of that and enables embedding of concepts inside image generation tools in fairly inexpensive way, with very little material and __absolutely incredible results__. More than that since the fine-tuning process is [rather straightforward](https://bytexd.com/how-to-use-dreambooth-to-fine-tune-stable-diffusion-colab/) it has unlocked [a whole scene of custom diffusion models where hobbyists compete for generating the best results](https://civitai.com/) in the most creative ways possible, mixing and matching different existing networks with an palette of techniques that keeps growing. The potential use cases for this technique are [numerous and diverse](https://pixelpoint.io/blog/ms-fluent-emoji-style-fine-tune-on-stable-diffusion/), I would say this is currently the most exciting ongoing growth of any AI sector. One thing worth noting is that openness and the DIY ethos of [StabilityAI](https://stability.ai/) was amplified by this accessible Dreambooth technique (authored by Google Research and originally working with their proprietary diffusion engine called Imagen) for which most implementations rely on Stability's [Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion) itself! What a great, bizarre yet encouraging synergy!

## Implications and Ethical Considerations 🤔

Overall, the recent boom in large language models and image generation tools has exciting implications for a wide range of industries and applications. While there are certainly ethical concerns to consider, the potential for these tools to improve and augment human capabilities is undeniable. It ~~will be~~ is interesting!

### The competitive edge of schizopoasting vs GPT-ass text

LLMs make it easy to generate your average normal descriptive text, basic stories, legal documents, boring emails, copywriting for art magazines, exhibition descriptions that noone reads and more. This evolution brings more value to the specificities of human writing including but not limited to extreme aversion to cohesive language and [schizoposting](https://knowyourmeme.com/editorials/meme-insider/schizoposting-on-the-rise-trollge-pill-time-and-i-hate-the-antichrist). Humans posters have to post weirder and better, find the outer limits of creative writing where patterns become more intricate, less structured. GPT-ass text has become slur just like [NPC](https://en.wikipedia.org/wiki/NPC_(meme)). Humans are excellent at detecting subtle shifts and twists in fellow humans' expression and making most of human writing a platitude will eventually raise the bar for what is considered interesting.

### How might generative image models  affect creativity?

Generative image models have the potential to greatly impact the field of digital art and design by allowing for the creation of highly realistic and unique images. However, it's important to note that the use of these models alone does not necessarily equate to creativity. Creativity involves the ability to come up with novel ideas, and while image models can generate new images, they are still limited by the data they were trained on and the parameters set by the designer. Therefore, the effect of generative image models on creativity will likely depend on how they are used and integrated with human creativity. Really?

<div class="post-image">
  <blockquote class="twitter-tweet"><p lang="en" dir="ltr">ML systems are just matrix algebra training data soup, and will only ever be as good as their training data. This is why AlphaZero is only as good as human players at Chess and Go :)</p>&mdash; flaw (@flawedaxioms) <a href="https://twitter.com/flawedaxioms/status/1609625028458582016?ref_src=twsrc%5Etfw">January 1, 2023</a></blockquote>
</div>

### Which industries will be affected/nuked first?

#### Big tech

These technologies have a great potential to [shuffle the cards](https://tanay.substack.com/p/big-tech-and-generative-ai) for a lot of the big actors in the tech industry. All industry players want a piece of the cake but the amount of competent cooks is still in relative low-supply. We're bound to witness a lot mercato-like transactions for AI rockstar researchers and a flurry of failed AI products.

#### Tech adjacent sectors

There are other industries that are likely to be affected by generative image models in the near future.

- Digital art and design: Generative image models can be used to create highly realistic images, which could be used in a variety of digital art and design projects.

- Film and video game production: image models can be used to create realistic, computer-generated characters, environments, and special effects. There are indie proof-of-concepts pretty good at [making concept art](https://www.reddit.com/r/StableDiffusion/comments/10vslkw/charturnerv2_released/).

- Advertising and marketing: image models can be used to generate photorealistic images for ads and marketing campaigns.

- [Architecture](https://www.dezeen.com/2022/11/16/ai-design-architecture-product/) and urban planning: image models can be used to generate photorealistic images of architectural designs, which could be used for presentations and visualizations.

- Fashion and retail: image models can be used to generate images of clothing and accessories, which could be used for online shopping and virtual try-on features.

- Automotive and industrial design: image models can be used to generate images of vehicles and industrial products, which could be used for visualization and marketing purposes.

These are some of the examples of the industry that will be affected by image models, but the use cases of these models are diverse and varied. The job of a software engineer is also changing dramatically and the future of the job market remains unclear.

#### AGI?

The pipe dream of a [General Artificial Intelligence](https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html) is becoming more and more tangible and there's a been quite a consensus shift towards considering it imminent. A few years ago this was only a wild speculation held by mostly __weirdos__ and __outlandish-yet-decorated visionaries__ like [Ray Kurzweil](https://en.wikipedia.org/wiki/Ray_Kurzweil) but recently a lot of seasoned front-row professionals in the industry have done a full 180 degrees among which: [Yann Lecun](https://twitter.com/ylecun/status/1621805604900585472), [Katherine Crowson (@RiversHaveWings)](https://twitter.com/RiversHaveWings), John Carmack (:heart:), [Andrej Karpathy](https://twitter.com/karpathy), [Joscha Bach](http://bach.ai/) and many more brilliant (but obviously a little bit biased) characters.

<div class="post-image"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Legendary programmer John Carmack literally said 60% chance of AGI by 2030, 95% by 2050 in his latest interview. He says its inevitable at this point. It&#39;s time to get your soul right. We&#39;re about to meet God</p>&mdash; sucks (@powerbottomdad1) <a href="https://twitter.com/powerbottomdad1/status/1622097498209673216?ref_src=twsrc%5Etfw">February 5, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>

Besides, the general public is getting their first glimpses of the uncanny valley through consumer facing prototypes which bridge the conceptual gap and create sensational headlines. GPT-3 existed long before ChatGPT but the introduction of a friendly UI suddenly made the popularity of the underlying model explode! My personal take on this whole spiritual ordeal is that indeed __the genie is slowly, but more and more rapidly, flowing out of its silicon shell__ and it will be extremely difficult to pinpoint the anticipated realization and even more difficult to forecast its impact. We're collectively in uncharted territory and we should all be as psyched about this as the moon landing in 1969.

<div class="post-image"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">A surprising number of people: <a href="https://t.co/UtKi9CaPwH">pic.twitter.com/UtKi9CaPwH</a></p>&mdash; Eigil - abstr/acc 💎 (30867/50000 words) (@Ayegill) <a href="https://twitter.com/Ayegill/status/1625279474463039489?ref_src=twsrc%5Etfw">February 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>


#### Where to experiment with these new technologies?

All these new shiny toys have in common the fact that they necessitate beefy (<16Gb VRAM need not apply) GPUs to run. In the case of the language models like GPT-3 they can be [very unwieldy](https://www.reddit.com/r/OpenAI/comments/u572t6/possible_to_run_openai_gpt3_models_like_davinci/) for the average consumer and thus require to be used as a service. On the other hand image generation networks can be trained (maximum resource intensivity) AND used (inference is less costly) on custom servers or locally.

<img class='post-image' alt="ethereal field of  gigantic mega computers with data cables, painting by Greg Rutkowski" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/ai3.png">

##### Local PC

Should you buy a cool expensive consumer GPU for your tower PC? The problem is that the minute you buy it its value starts decreasing and slowly drifting away in very fast market. Additionally maintaining a local environment for the GPUs can be tedious and sometimes re-provisioning would be faster with a cloud solution where you can just scrap the entire thing and start anew. This would not be a massive pain in the ass if the machine-learning adopted something else than Python for building most its tooling but [it is what it is](https://www.youtube.com/watch?v=yDkiqbjtijk).

##### Using SaaS tools

This area is moving extremely fast and includes players that have rapidly become household names. These are the companies making the headlines and being used by journalists to comment on the advent of the machine age. Besides the obvious convenience they do promote a monolithic approach to creative walled gardens. These services are very easy to use but are heavily censored and hold a questionable attitude towards the rights of the content produced. In your user journey it should definitely be the first step though, a friendly way to get a feeling for what the technology is capable of.

- [ChatGPT](https://chat.openai.com): one of the fastest growing userbase in recent tech history
- [Midjourney](https://www.midjourney.com): a sort of meta cohesive customer driven art direction which I have yet to enjoy
- [Dall-e 2](https://openai.com/dall-e-2/): the OG heavily censored image magic box
- [Copilot](https://github.com/features/copilot) : a programming assistant incredibly effective

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
| 8$ monthly sub| Lots of bugs |
| Lots of cool features | The "official" adapted notebooks are buggy af :/ |
| Gradient Notebook IDE is cool | Limited availability of machines|

_Use this [tutorial](https://github.com/Engineer-of-Stuff/stable-diffusion-paperspace/blob/master/docs/Paperspace%20Guide%20for%20Idiots.md) to get Automatic1111's stuff up and running. Don't use the stuff mentioned on their blog lol :warning:_

###### [JarvisLabs](https://cloud.jarvislabs.ai/)

|PROS :white_check_mark:| CONS :no_entry_sign: |
|:--------------|:-----|
| Cheap rates | Shitty barebones UI |
| Pre-defined images like Automatic1111's ||


_Disclaimer: this article was written using LLMs, my own brain, my beloved [HHKB](https://hhkeyboard.us/hhkb/pro-hybrid) and illustrated with Stable Diffusion 1.5._