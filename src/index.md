---
title: Jake Zimmerman
description: Types enthusiast. I write code and blog.
css:
  - /css/main.css
header-includes: []
include-before: []
include-after: []
---

Hey there! Here are some links you might be interested in:

- my [GitHub profile](https://github.com/jez)
- my [blog](http://blog.jez.io)
- my [resume](/resume/)

If you want to contact me, I prefer [email](mailto:jake@zimmerman.io),
[iMessage (or SMS)][on-leaving-facebook], or [Signal][on-leaving-facebook].

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

- [Projects](#projects)
- [Writing](#writing)
- [Talks](#talks)
- [Work](#work)
- [Other interests](#other-interests)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Projects

> Why is programming fun? What delights may its practitioner expect as his
> reward?
>
> Fred Brooks, _The Mythical Man-Month_

I keep all the things I spend my time working on [on GitHub].\
Here are my favorite kinds of things to work on:

- [Command line utilities][topic:cli]

  I mostly write command line tools in Bash and Haskell.

- [Tools for writing][topic:writing]

  I use Pandoc and Markdown for all my writing needs.

- [Vim plugins][topic:vim]

  I'm a big fan of Vim. In fact, this page is designed to look like what
  syntax-highlighted markdown looks like when I open Vim.

- [My dotfiles][topic:config]

  I spend a lot of time configuring my development environment.

- [Programming language theory][topic:plt]

  I've been fascinated by types and programming languages since school, and
  enjoy putting the ideas I've learned into practice.

[on GitHub]: https://github.com/search?p=2&q=user%3Ajez+fork%3Atrue+topics%3A%3E0&type=Repositories
[topic:vim]: https://github.com/search?q=user%3Ajez+fork%3Atrue+topic%3Avim&type=Repositories
[topic:cli]: https://github.com/search?q=user%3Ajez+fork%3Atrue+topic%3Acli&type=Repositories
[topic:writing]: https://github.com/search?p=1&q=user%3Ajez+fork%3Atrue+topic%3Awriting&type=Repositories
[topic:config]: https://github.com/search?q=user%3Ajez+fork%3Atrue+topic%3Aconfig&type=Repositories
[topic:plt]: https://github.com/search?q=user%3Ajez+fork%3Atrue+topic%3Aplt&type=Repositories&o=desc&s=updated


## Writing

> With writing you have the extraordinary power of a Turing machine.
>
> Manuel Blum, _Advice to a Beginning Graduate Student_

I keep my writings in two places:\

- [blog.jez.io] for technical posts
- [jez.io/thoughts/] for non-technical musings

Recently, I've been writing about [Haskell][blog-haskell], [types][blog-types],
[programming][blog-programming], and [Vim][blog-vim] (among others) if you
prefer to browse by topic.

Some selected articles:

- [Code Review from the Command Line]

  I do the bulk of my code review from the command line, especially when
  reviewing larger changes. This post explores why and how I do this.

- [Union Types in Flow & Reason]

  Union types are powerful yet often overlooked. This post explores some of the
  tradeoffs in the way Flow implements union types versus ReasonML.

- [Profiling in Haskell for a 10x Speedup]

  I wanted to learn how to make Haskell code faster, so I solved a toy problem
  with a naive algorithm, and then profiled away the slow parts.

- [Variables and Binding]

  Variables are central to programming languages, yet they’re often overlooked.
  This post walks through three approaches to implementing variables.

- [Social. Private. Open. Pick Three][on-leaving-facebook]

  I no longer use Facebook. This post outlines why I made this decision, and
  what I use for communicating with people instead.

[blog.jez.io]: https://blog.jez.io
[jez.io/thoughts/]: https://jez.io/thoughts/

[blog-haskell]: https://blog.jez.io/categories/#haskell
[blog-types]: https://blog.jez.io/categories/#types
[blog-programming]: https://blog.jez.io/categories/#programming
[blog-vim]: https://blog.jez.io/categories/#vim

[Code Review from the Command Line]: https://blog.jez.io/cli-code-review/
[Union Types in Flow & Reason]: https://blog.jez.io/union-types-flow-reason/
[Profiling in Haskell for a 10x Speedup]: https://blog.jez.io/profiling-in-haskell/
[Variables and Binding]: https://blog.jez.io/variables-and-binding/
[on-leaving-facebook]: https://jez.io/thoughts/on-leaving-facebook/


## Talks

I mostly prefer writing, but from time to time I give talks.

[─▶ jez.io/talks/](https://jez.io/talks/)


## Work

> My heart is in the work.
>
> Andrew Carnegie

I'm currently very satisfied with my work! But if you work on programming
languages or language-aware IDE tooling I'm always willing to chat. (At the very
least, it's always fun to swap notes on unique approaches to common problems.)

I've been lucky enough to work at a number of great companies:

- [Stripe] - [Sorbet]

  > Jan 2022 - ···

  I'm once again working mainly on Sorbet (the type checker, not the compiler).
  My current focus is improving Sorbet's performance on large codebases and the
  experience of using Sorbet within an editor. This involves moving from batch
  processing to a more incremental architecture, building a parser that's more
  tolerant of syntax errors, and building new language-aware, IDE-like features
  into Sorbet.

- [Stripe] - [Sorbet Compiler]

  > Jan 2020 - Dec 2021

  I spent two years building the Sorbet Compiler, an experimental
  ahead-of-time compiler translating Ruby source code to machine code. The
  architecture of the compiler essentially used Sorbet as the compiler frontend,
  LLVM as the compiler backend, and the Ruby VM and it's C extension APIs as a
  language runtime. The Sorbet Compiler's main goal is improving latency on
  Stripe's live API traffic.

- [Stripe] - [Sorbet]

  > Aug 2018 - Dec 2019

  Starting in my second year at Stripe, I joined the team building Sorbet, a
  static type checker for Ruby. I developed new type system features for it, and
  ran large-scale code migrations to drive adoption of Sorbet in Stripe's
  codebase. Stripe has millions of lines of Ruby and hundreds of developers, so
  we see adding types to Ruby as a key way to improve developer productivity.

- [Stripe] - [Stripe Elements]

  > Aug 2017 - Aug 2018

  I spent a year doing frontend development on Stripe Elements, a JavaScript
  UI library for collecting payment information. We emphasized cross-platform
  compatibility, rigorous types and testing, and high product quality.

- [Stripe] - [Stripe Checkout]

  > May 2016 - Aug 2016

  When I interned at Stripe, I worked on improving the developer experience of
  Checkout. Checkout is often a developer's first experience with Stripe, so we
  wanted to make sure the onboarding experience was top notch.

- [Dropbox] - [Dropbox Paper]

  > May 2015 - Aug 2015

  When I interned at Dropbox, I worked on Paper. Paper is a collaborative
  workspace for teams. My specific project was to add rich embeds for things
  like YouTube videos and Google Docs.

- [Bloomberg]

  > May 2014 - Aug 2014

  When I interned at Bloomberg, I worked on an internal financial simulation
  tool in C++ that enabled developers to prototype and test their apps.

[Stripe]: https://stripe.com/
[Sorbet]: https://sorbet.org
[Sorbet Compiler]: https://www.youtube.com/watch?v=BH8S1htcHXY
[Stripe Elements]: https://stripe.com/elements
[Stripe Checkout]: https://stripe.com/checkout
[Dropbox]: https://www.dropbox.com
[Dropbox Paper]: https://paper.dropbox.com
[Bloomberg]: http://www.bloomberg.com/

## Other interests

- I played on my high school's table tennis team. I still play table tennis in
  my free time.

- I watch way too much anime. Happy to give recommendations.

- I enjoyed being a teaching assistant. The courses I helped teach:

  - [15-131 Great Practical Ideas for CS][131]
  - [15-150 Functional Programming][150]
  - [15-210 Parallel and Sequential Data Structures and Algorithms][210]
  - [15-312 Principles of Programming Languages][312]

- I was an active member of [ScottyLabs], a student organization at CMU
  dedicated to improving the campus tech community. We hosted [TartanHacks] and
  put on various other events throughout the year.

[131]: https://www.cs.cmu.edu/~15131/
[150]: http://www.cs.cmu.edu/~15150/
[210]: http://www.cs.cmu.edu/~15210/
[312]: https://www.cs.cmu.edu/~rwh/courses/ppl/

[ScottyLabs]: https://scottylabs.org/
[TartanHacks]: https://tartanhacks.com/

- - -
