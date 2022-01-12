---
layout: post
title: "Ossacip Bot"
date: 2021-07-12 00:00:00 -0400
image: "/images/ossacip_8.jpg"
banner:
    video: /images/video/ossacip.mp4
    loop: true
    volume: 0.0
    start_at: 0.0
    image: /images/ossacip_8.jpg
    opacity: 1.0
    background: "#000"
    height: "100vh"
    min_height: "38vh"
excerpt: "A Twitter bot that generates procedural artwork using a trigonometric formula, node.js, and Processing 3."
medium: "Procedural Art"
tags: [technology, art, poetry, automation]
---

A Twitter bot that generates procedural artwork using a trigonometric formula, node.js, and Processing 3.

-   [@OssacipBot on Twitter](https://twitter.com/OssacipBot)
-   [OssacipBot on Github ](https://github.com/mbrav/OssacipBot)

## Example Gallery

<div id="ossacip" style="width: 100%; overflow-x: auto;">
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_1.jpg" alt="OssacipBot Image" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_2.jpg" alt="OssacipBot Images" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_3.jpg" alt="OssacipBot Image" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_4.jpg" alt="OssacipBot Image" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_5.jpg" alt="OssacipBot Images" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_6.jpg" alt="OssacipBot Image" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_7.jpg" alt="OssacipBot Image" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_8.jpg" alt="OssacipBot Images" />
    <img style="display: inline-block; width: 32%; height: 100%;"
        src="/images/ossacip_9.jpg" alt="OssacipBot Image" />
</div>

## Process

Over the past couple couple weeks, I started experimenting with procedural maths and generative algorithms using the Processing 3 library. My first experimentations led me to create a new Tumblr blog called [Generative Primitives](http://primitivs.tumblr.com/) where I would post one animated GIF per day. I posted a couple animations while making the code available online for anyone to take a look at on GitHub.

![My first experimentations](https://66.media.tumblr.com/ff9635712314fccb4511fb101b915a06/tumblr_o9w9c8pR6D1vzri7ko1_500.gif)

After a few posts however, I came across Vincent's D. Warmerdam's [blog post](http://koaning.io/fluctuating-repetition.html) where he demonstrated how simple trigonometric formulas can draw thousands of points that form a complex, smoke looking like structure. I was inspired by Warmerdam's post and thought I should experiment with his formula and see where that will lead me to.

### Fractal Formula

The formula is bases on the notion of mathematical [Dynamical Systems](https://en.wikipedia.org/wiki/Dynamical_system). The bot randomizes 6 different variables called _a_, _b_, _c_, _d_, _e_, and _f_. One of these variables is randomly chosen to have its value dynamically manipulated allowing the formula to produce "movement" to the exported GIF. Then 1 million points are drawn per frame with the following coordinates where _n_ is the current point:

![Math Formula Image](https://i.imgur.com/Kk5R18t.png)

![An example of an output based on Warmerdam's formula](http://koaning.io/theme/images/art2.png)

![Another example of an output](http://koaning.io/theme/images/art7.png)

I ended up making [a couple](http://primitivs.tumblr.com/post/147107300855/cycles-1-60-frames-coded-in-processing-3) successful animated GIFS using his formula but I wanted to extend the idea further. Since the formula uses just 6 variables (_a_, _b_, _c_, _d_, _e_, _f_) for influence the position of individual points in the generated structure, I could just have a bot do all the generation and I would just sit back, and watch it generate drawings while attributing myself as the creator! Sounds compelling, but don't know how good would it be if all our art was produced by bots. But regardless, I went ahead and created [@OssacipBot](https://twitter.com/OssacipBot) on Twitter that generates a structure every half-hour.

The outcome that the bot produced was quite compelling. In order to run the Bot nonstop, I had to set it up on a remote server. This is probably the only option if one where to run something like a bot for a long time nonstop. A server is essentially a computer that benefits from a fast internet connection and constant uptime. Since I am not that high on a budget, I had to choose the most economic version of 5$ per month. This option is much slower an it takes around 15 minutes to generate a 60 frame GIF animation where on my MacBook Pro, the same process takes just 2-3 minutes. But the animation draws 2’000’000 points per frame and if you multiply that by 60, you get 120’000’000 points that have to be drawn by the processor! The large number points is what makes the outcomes look so cool. But even for technology that’s a big number, so it can’t be blamed. But this bottleneck led to explore something new…

## Shaders

Shaders are very cool if one has a basic understanding of the difference between the CPU and the GPU. Typical CPU’s are good at processing things that don’t require much of multitasking, but GPU’s are enormously well suited for multitasking. The main reason is because graphics require the GPU to do many things simultaneously, a task that the CPU will most likely not be able to handle well. For example, most modern computer CPU’s have around 2-4 processing cores which gives them a good enough ability to multitask but when it comes to 3D rendering, that small number of cores makes a CPU not well suited for the task. GPU’s on the other hand, have thousands of cores which make them very well suited for graphics. Nvidia’s recently announced GTX1080 GPU card for example, has a total of 2560 processing cores, also known as **shader processors**. This number is way smaller than the 2-4 cores in a typical processor.

![The number of cores in a CPU vs GPU ](https://www.nvidia.com/docs/IO/143716/cpu-and-gpu.jpg)

It is important to emphasize that _shaders_ are not processors meant for just shading. Although many people are familiar with what a GPU and shaders are, many people think of _shaders_ as programs that paint and shade pixels using the GPU card. In reality however, a shades is a “small program” that can run on thousands of processing cores and do not only graphic related tasks, but even complex math calculations.

Now, If come back to my bot, it takes my 15 minutes for it to render my whole 60 frame animation. If for example, that process where to be divided on a GTX1080 GPU card, it in theory would take **less than a 1 second to render the same animation**! 15 minutes and 1 second, what a difference!

So this led me to start experimenting with openFrameworks which is a creative coding C++ library that has an ability to directly talk with the GPU card through a language called OpenGL. I first started creating geometric shapes using so called _vertexes_. A vertex is essentially a 3D coordinate that you give to the GPU and the you tell it the color, size, style, etc. I ended up making the GPU do all the math which made everything so much faster than in Processing 3. The benefit of OpenGL that openFramworks uses is that all those points are manipulated by the GPU which 1000’s of time more efficient than just using the CPU.

![Vertices manipulated by the GPU makes everything much faster](http://i.giphy.com/3o6ZtkTxyhvGyoSTzq.gif)

### Conclusion

This will be a wrap up for the process but it is also just a start. The next step will be to convert my bot into a bot that will take advantage of the GPU allowing it to create more advanced 3D graphics.

## Description

This bot explores the boundaries of authorship for artwork generated by autonomous systems. When an autonomous system develops to a point where it has a decent form of computational creativity, a re-examination of its copyrights would most likely be necessary. If this examination doesn't happen, the aesthetics and even morals that determine what is _art_ and what is _not art_, would most likely have to be redefined. It seems that a non-human entity might not relate to the traditional notions of a human-produced artifact.

On the other hand, we humans have drastically altered the mediums and technologies through which our artistry is expressed and conveyed. This can be demonstrated by the evolution of our art mediums -- what began with Neanderthal cave paintings, continues with the advent of digital and virtual art mediums of today. But is there a difference between a tool used as leverage for producing art (such as a paint brush or a computer mouse), and an entity that can autonomously generate art? When a non-human entity gains the ability to produce art, could art still be defined as an outlet of human expression, or should it be categorized as something else (perhaps as a commodified kind of entertainment)? What is the limit of what we define an agent that produces artwork “decent” enough to have a copyright attribution? If art extends beyond the boundaries of an expressive performing artifact, _art_ might define just about any object/visual that is subject to manipulation.

The technologies behind this bot, allow it to autonomously generate procedural artwork for an indefinite amount of time with near infinite combinations. The bot produces visuals with a form of marvel that might justify it to have a certain artistic quality. For one thing, a trigonometric formula is the underlying mechanism behind the visual generation and is not a completely uncharted form of art. Leonardo DaVinci's _Vitruvian Man_ and M.C. Escher's illusive geometric depictions are perfect examples of art that involves math. Ossacip Bot however, might not seem to posses the justifiable quality of uniqueness that can formally approve its artistry. It’s inner functioning is exposed to the internet that allows it to have an indefinite number of instances. Someone may choose to create millions of instances of this bot and flood the internet with fractal animations. Given the correct existential goals and scientific advancements, some hypothetical alien civilization might choose to use all the stardust in the universe to construct as many instances of _Ossacip Bot_ as possible. This demonstrates the material and commodity-like nature the lies behind autonomously generated art and media.

The question that welcomes an answer, is what is the boundary between _art_ and a _material artifact_ when it comes to artwork generated/produced by an autonomous system? Is expression a necessary prerequisite for defining a legitimate art piece? Where is the boundary between a tool used as a mean for artistic expression, and a “tool” that autonomously produces artwork? Given the fact that objects with lacking cognitive abilities cannot produce an intelligible artist statement, can an autonomous system even have the right for artistic authorship?
