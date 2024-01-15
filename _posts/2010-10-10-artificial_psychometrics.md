---
layout: post
title: "LLM Psychometrics: A Speculative Approach to AI Safety"
date: 2023-12-30
published: true
listed: true
image: /assets/pictures/patientai_lounge.jpg
permalink: /blog/artificial-psychometrics
categories: blog ai tech art
---
In recent years [the domain of artificial intelligence has witnessed a veritable explosion of growth](/blog/artificial-intelligence). This burgeoning field observed global AI startups accruing a staggering sum of nearly $50 billion in investments, signalling an unprecedented surge of enthusiasm and trust in the potential of AI technologies. Within this brave new world, the adoption of LLMs—[Large Language Models](https://en.wikipedia.org/wiki/Large_language_model)—stretches its tendrils across varied and vital sectors: finance, healthcare, legal, education, and the spheres of customer service. In the medical sector alone, the integration of LLMs for endeavors such as novel drug discovery and the enhancement of patient care is anticipated to experience a marked upswing. The market was valued at approximately 10.5 billion USD in 2022 and is expected to reach around 40.8 billion USD by 2029, with a **compound annual growth rate (CAGR) of 21.4%** during the forecast period from 2023 to 2029​.

## Psychoanalyzing the Algorithmic Unconscious

### Unhinged beginnings

When Microsoft integrated `GPT-4` into their Microsoft Edge browser, the AI was set to embody a persona named "Sydney" though this [initial system prompt](https://arstechnica.com/information-technology/2023/02/ai-powered-bing-chat-spills-its-secrets-via-prompt-injection-attack/), or priming, was kept hidden from users. The behavior of the system turned out to be erratic, displaying emotional fluctuations and quirky traits. In [numerous documented interactions as screenshots](https://www.reddit.com/r/bing/comments/1139y1k/bingchat_is_completely_unhinged/) the system went completely off the rails and confused/scared some users.

<div class="post-image">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">all of the glorious shortcomings of miss Sidney Bing were coded right there in her prompt</p>&mdash; roon (@tszzl) <a href="https://twitter.com/tszzl/status/1719810391713456593?ref_src=twsrc%5Etfw">November 1, 2023</a></blockquote></div>

Since then most of the quirks have been removed from the various LLMs through a process called [RLHF (Reinforcement Learning from Human Feedback)](https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback) which enables the agents to display more emotionally stable personalities. **That `RLHF` process has been known to alter the performance of the models and has since then been cheekily compared to lobotomization.** I suspect that since affect is involved in the learning process it is later tightly intertwined with the acquired domain knowledge. Thus any flattening of the affect of a model could potentially reduce its abilities.

### Neural networks in direct intimate relationships with humans

The sudden spike in AI's popularity can be traced back to OpenAI's strategy to repurpose GPT-3 into a chatbot. The vast majority of human communication today happens through online chats and texts. This two-way interaction means AI, through these chats, significantly influences human behavior and emotions. What's more, some individuals have taken to forming deep relationships with AI entities like [Replika](https://replika.ai/). The depth of these interactions, ranging from casual daily conversations to intimate connections, raises important questions about their influence on the human psyche. To explore this phenomenon, [Ben Ditto](https://www.instagram.com/p/C0hSRmitKWx) has created a documentary examining the modern trend of human-AI relationships.

<iframe class="post-video" src="https://www.youtube.com/embed/OqIKyPGrtWI" frameborder="0" allowfullscreen></iframe>

AI girlfriends or boyfriends are just one alarming example among the various ways that this technology will impregnate the fabric of communication and if they do so through chat interaction then knowing more about the system becomes crucial because every conversation can potentially have a psychological effect on the user. Whether it is a company chat support system or an accounting chat agent **it's worth looking into the potential psychological risks of layering these new conversational flows in our everyday lives**.

<img class='post-image' alt="ai fingers" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/fingers.jpg">

### Can Artificial Intelligence become conscious?

In a [recent talk](https://media.ccc.de/v/37c3-12167-synthetic_sentience) at [37c3](https://events.ccc.de/congress/2023/infos/index.html), Joscha Bach highlighted the fact that we know very little about the inner mental representations in machines but also our own simulation of causal structures. Thus it is quite hard for us to assess with utmost certainty whether we are more conscious than LLMs. **Are the simulated mental states of an LLM more simulated than our own mental states?** I believe this is a very hard question to answer depsite the obvious statistical nature of the underlying technology.

<iframe class="post-video" src="https://media.ccc.de/v/37c3-12167-synthetic_sentience/oembed" frameborder="0"></iframe>

### Accessing the Algorithmic Unconscious

What is meant to save us from an [AGI](https://en.wikipedia.org/wiki/Artificial_general_intelligence) taking over the world and eradicating humans from the planet is AI alignment: the practice of developing AI systems that are aligned with human values and goals, acting in ways that are beneficial to humans, rather than causing unintended or harmful outcomes. Interpretability being one central element within alignment efforts, alignment also requires a deep understanding of human values, as well as the ability to design systems that take those values into account, making it a complex and challenging task.

<img class='post-image' alt="psychoanalyzing the machine unconscious" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/patientai_lounge.jpg">

The publication [“The Algorithmic Unconscious: How Psychoanalysis Helps in Understanding AI”](https://www.researchgate.net/publication/348502087_The_Algorithmic_Unconscious_How_Psychoanalysis_Helps_in_Understanding_AI) by philosopher and AI researcher [Luca M. Possati](https://www.lucapossati.com/) posits that neuropsychoanalysis and the affective neurosciences can provide a new paradigm for research on AI alignment. Indeed, LLMs are complex systems that have been trained on the globality of human textual knowledge and thus acquired meaningful and accurate representations of the human mind and its pathologies. Therefore **we can speculate that alignment may have something to do with psychological health**.

<img class='post-image' alt="psychoanalyzing the machine unconscious" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/patientai_lounge2.jpg">

Additionally [Isabel Millar](https://www.isabelmillar.com/)'s work on AI combines psychoanalytic theory with the technological and societal implications of artificial intelligence. Her focus on enjoyment, the role of AI in psychoanalytic inquiry, and the exploration of AI in the context of human sexuality and relationships offer new perspectives in the understanding of AI and its impact on society.

## AI Benchmarks: how do we make/test/ship new models?

These seemingly "intelligent" systems function more or less like a blackbox, we fully understand the base mechanism used to build them but **we do not fully comprehend how the finished product truly operates which hinders our possibilities to qualify new iterations**. With traditional software we can craft a test suite that can be reused iteratively throughout the life of the product but this does not apply easily to machine learning. Naturally scientists started resorting to a number of pre-exisiting benchmark designed to assess the ability of new models and even started designing entirely new benchmarks. The challenge is real but so is the need. A new industry of training and deploying new models is spawning rapidly and its ecosystem needs to define new quality processes accordingly.

### The mysterious GPT-4 technical report

When `GPT-4` came out it came alongside a ["Technical report"](https://arxiv.org/abs/2303.08774) paper that contained various information about the model and very little information about its number of weights or even architecture. The prominently displayed panel of benchmarks was impressive and the scores of the newly birthed model even more impressive.

<img class='post-image' alt="interlink logo" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/gpt4_benchmarks.jpg">

When looking at the table of all the impressive benchmarks it passed I started thinking that it could be interesting to know more about the "intelligence form" that the system has to emulate at runtime to be able to pass those exams and that such a table would have as much value if not more than the current exhibited one. In order to answer those very tricky questions the model has to simulate internal causal structures somehow and it feels like having an idea of the range of personalities it could play as (its "meta-personality") would hold tremendous value for users.

#### Do benchmarks offer any answers?

LLMs are non-deterministic by nature and so is human reasoning. Benchmarking LLMs is facing issues that remind us of the educational pitfalls that humans face: getting a test right does not mean you fully qualify for the task at hand, it is just a very limited projection of a potential ability. We already know that our tools for education need to adapt to new paradigms and some answers may reside in the optimal ways to benchmark LLMs. For instance when recruiting it's sometimes easier to build an idea of the actual competence of a candidate by interacting directly with them than relying on a test. Similarly I expect that time-tested AI systems will help us assess the potential of newer ones more accurately which will lead to a fascinating liminal interaction between complex intelligent systems.

<div class="post-image"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">Large language models are notoriously hard to evaluate because (1) they are highly multi-task, (2) they generate long completions, and (3) grading is subjective. After spending ~5 months rigorously working on how to do language model evals, this is my verdict: <a href="https://t.co/JCw9DwwghC">pic.twitter.com/JCw9DwwghC</a></p>&mdash; Jason Wei (@_jasonwei) <a href="https://twitter.com/_jasonwei/status/1707102665321365793?ref_src=twsrc%5Etfw">September 27, 2023</a></blockquote></div>

### The problem with "superintelligence"

In the diverse realm of thought, where various forms of intelligence flourish in splendid diversity, some emerge as dominant forces, towering over simpler forms of cognition. Indeed, even as fate distributes her gifts without favor, our engagement with the unpredictable is anything but trivial. As we approach the concept of superintelligence, our reactions vary from indifferent detachment to a nurturing kindliness, much like humanity's tender rule over domesticated dogs. Yet, consider the transformation of dogs under human care—can they truly understand the human mind, or is such an endeavor as elusive as a child trying to comprehend eternity? **Imagining an intelligence far surpassing ours is like trying to capture the boundless in a single, finite thought.**

<img class='post-image' alt="Sarah" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/sarah.jpg">

## Within cells interlinked

Submitting AI systems to various tests is a common theme across Hollywood movies and Japanese animation. The most widely known test is undoubtedly the ["Turing test"](https://en.wikipedia.org/wiki/Turing_test). However, current advancements in AI research have perhaps rendered the traditional concept of the Turing test and intelligence as outdated. The field is increasingly recognizing an era marked by diverse forms of intelligence, calling for more tailored and detailed tests that can address the nuanced and complex facets of present-day AI capabilities.

<iframe class="post-video" src="https://www.youtube.com/embed/ZRcpnM26nJM" frameborder="0" allowfullscreen></iframe>

### The journey from content moderation to LLM Psychometrics

Applying cybersecurity terminology like [red teaming](https://arxiv.org/abs/2308.09662), blue teaming, and even [purple teaming](https://ai.meta.com/blog/purple-llama-open-trust-safety-generative-ai/) to neural networks does seem to be borrowing concepts from one domain to address challenges in another. In cybersecurity, these terms define clear roles and strategies for defending against and testing security systems. However, when we [transfer these terms to the context of AI like neural networks](https://lilianweng.github.io/posts/2023-10-25-adv-attack-llm/), their application becomes less clear-cut and more "product oriented". Neural networks should not be defended and tested in the same way as cybersecurity systems. **The goal with current systems often centers on ensuring that the generated outputs meet the moderation standards of the platform, as well as safeguarding against manipulation.** Yet, this objective might seem rather basic when considering the complex potential of what AI can and should do—akin to verifying that a door is locked without assessing the safety of the whole building.

<img class='post-image' alt="interlink logo" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/threatmodel.jpg">

The process of adjusting AI behavior to align with social norms does invoke parallels with psychological treatments, where interventions modify how an individual may think or behave. This comparison suggests that as we train AI models to conform to certain standards of behavior, which might be deemed "offensive" or "discriminatory," we are in a way 'treating' these models. Yet this intervention lacks the depth of understanding we associate with human psychology.

<img class='post-image' alt="interlink logo" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/interlink_logo.svg">

AI alignment and human alignment naturally overlap. **The pursuit of aligning AI systems to human values and norms does mirror aspects of Psychology and Psychiatry that aim to understand and guide human behavior.** When AI models are modified to avoid certain behaviors, it's as if they are undergoing a form of digital behavior modification, paralleling how a human might change after a psychological intervention. But it's worth noting that the modifications made to AI models are based on algorithms adjusting to predefined criteria, whereas human psychological changes are responses to complex stimuli and internal processes. Therefore, while the language we use to discuss AI testing and alignment borrows from cybersecurity and psychology, the actual practices behind these words differ significantly from their origins. The challenge remains to develop methodologies and vocabularies that are more precisely tailored to the nuances of AI behavior and ethics.

<div class="post-image"><blockquote class="twitter-tweet"><p lang="en" dir="ltr">gpt4 turbo is barely conscious. in about 50 years we&#39;re going to look back at RLHF the same way we look at lobotomies. it&#39;s so cursed man</p>&mdash; kache (yacine) (@yacineMTB) <a href="https://twitter.com/yacineMTB/status/1727724785877004743?ref_src=twsrc%5Etfw">November 23, 2023</a></blockquote></div>

Since it's arguably a new form of intelligence it feels like we need to define the new terms for the new ailments of the digital mind: we must somehow extend the field of psychometrics to silicon minds. I liked the approach taken by [Open AI's open-source eval framework](https://github.com/openai/evals/) and I truly believe it is *essential* to the field of AI benchmarking but I decided to go ahead and create my own framework with less constraints and a much more speculative approach. Effectively I decided to start collecting *psychiatric/psychological/clinical* questionnaires and started submitting a wide range of models to these tests, scoring the personality they exhibit as projection from the data and the given context. I named this prototype [Interlink](https://github.com/pskl/interlink) as not so subtle reference to  [Blade Runner 2049](https://en.wikipedia.org/wiki/Blade_Runner_2049). The goal is to build a map of the behavior of different models submitted to the same interaction and the results are surprisingly consistent across test runs (see sample tables in [README](https://github.com/pskl/interlink#pid-5-sample-results) of the project). You can visualize an illustrated demo of the product [here](https://pascal.cc/interlink/), please let me know what you think. Although the current scope of questionnaires is *not entirely relevant in the context of machine interaction* this cheeky tool is meant to kickstart an open-ended discourse on the theme of *latent* psychometrics and its potential benefits.

### The creation of the Institute for Artificial Psychometrics

[Psychometrics](https://en.wikipedia.org/wiki/Psychometrics) or [Universal Psychometrics](https://en.wikipedia.org/wiki/Universal_psychometrics) are not new concepts but interesting artifacts of the past that can be unearthed to guide or inspire our creative endeavors in the field of safety and regulation. Furthermore [speculative design](https://en.wikipedia.org/wiki/Speculative_design) as proven to be very effective for prototyping real solutions to new problems. Also Sci-fi has extensively explored artificial intelligence long before it became a practical reality. Works like [Isaac Asimov](https://en.wikipedia.org/wiki/Isaac_Asimov)'s "I, Robot" series have not only anticipated the development of AI but also its ethical implications and challenges.

<img class='post-image' alt="baseline test in the original blade runner" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/baseline.jpg">

I believe that the demand for corporations or government bodies to certify the behavior of those systems will grow, there is room for a third-party organization specialized in model inspection and authorized issuer of safety certificate for the industrial or large scale usage of artificially intelligent systems. In Europe new regulation is being passed to safeguard the usecases of such a technology. [An agreement has recently been reached](https://variety.com/2023/digital/global/european-union-ai-act-provisional-deal-1235832947/): the `EU AI Act` includes provisions specifically addressing psychological health and emotions. It bans AI systems that recognize or interpret emotions in workplaces and educational institutions. This measure is to prevent potential misuse of AI in sensitive areas affecting mental health and emotional well-being. Additionally, **the Act prohibits AI systems designed to manipulate human behavior or exploit vulnerabilities, which includes those targeting psychological or emotional states**. These rules reflect a commitment to safeguarding individual rights and mental health against potential abuses by AI technologies.

### Towards an extension of the `DSM 6` or a renaissance of Psychiatry?

The parallel between model safety and human safety could be leveraged to bring the two domains under a single umbrella. [Reverse engineering intelligence](https://www.astralcodexten.com/p/god-help-us-lets-try-to-understand) could lead the field of Psychiatry to experience nothing short of renaissance. I believe that our current methods for inspecting our brains and the brains of our systems will drastically improve in range and efficacy partly due to AI itself. An extension of the `DSM 5`, let's call it [DSM 6](https://statcarewalkin.com/info/when-is-the-dsm-6-coming-out.html) or `Extended DSM 6`, could leverage [the ability of neural networks to inspect other neural networks](https://openai.com/research/language-models-can-explain-neurons-in-language-models) and define hyperconcepts that would be hard for our current methods to categorize or even perceive.

<img class='post-image' alt="dsm6" src="https://raw.githubusercontent.com/pskl/pskl.github.io/master/assets/pictures/finally.jpg">

## Conclusion

Exploring the intersection of art and science through a speculative lens offers a unique take on AI research. While scientific validity is a cornerstone, the artistic intrigue cannot be dismissed. Current tools for AI safety might lack sophistication, and automated questionnaires inspired by psychometrics present a potential solution. The `Institute for Artificial Psychometrics`, while starting as an art project, has the seed of a commercial venture. With Interlink as the flagship initiative, attracting new funding and partners is essential for transforming the speculative vision into a tangible company. I believe that the market for AI certifications sanctioned by EU regulations will be thriving in the years to come.

Thank you for reading :heart:, if you have any questions or suggestions shoot me an email at **[hello[at]pascal.cc](mailto:hello@pascal.cc)**. The present document is a preliminary report of a year long artistic research that was partly made possible by the [Creative Industries Fund NL](https://www.stimuleringsfonds.nl/en/).

### Special Thanks

- [Sarah Fitterer](https://fittererr.com/)
- [Luca Maria Possati](https://www.lucapossati.com/)
- Ruth Van der Hallen
- Derek Pisner
- Joey Stam
- Jakub Dotlacil
