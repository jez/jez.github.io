---
title: Testing
description: Don't mind me! This is just for testing.
css:
  - /css/main.css
header-includes: []
include-before: []
include-after: []
---

# Header 1

This is a test page designed to be used during development, to make sure that
the custom CSS covers all the kinds of Markdown Pandoc supports. For example,
this text **should be bold** and this text *should be italic*. Meanwhile, this
represents `inline code` and this represents a [hyperlink](#).

These are unicode box-drawing characters:\
┌───┐\
│ × │\
└───┘\
Do they overlap? Are there gaps?

This is a test page designed to be used during development, to make sure that
the custom CSS covers all the kinds of Markdown Pandoc supports. For example,
this text **should be bold** and this text *should be italic*. Meanwhile, this
represents `inline code` and this represents a [hyperlink](#).

> This is a test page designed to be used during development, to make sure that
> the custom CSS covers all the kinds of Markdown Pandoc supports. For example,
> this text **should be bold** and this text *should be italic*. Meanwhile, this
> represents `inline code` and this represents a [hyperlink](#).

## Header 2

- a list
- with
- no nesting

End of first list

- nested list
  - nested
- another point
  - nested again

And then another list:

- this time with paragraphs and nesting

  this is another paragraph

- some random point

  another point

1.  Point 1
2.  Point 2

What about mixing the two?

1.  Point 1

    - first bullet
    - second bullet

2.  Point 2

    - third bullet
    - fourth bullet

### Header 3

```ruby
class A
  def foo; end
end

# comment

Opus::Ops::DB::Model::NetworkTransaction::SettlementState.readytosubmit(arg0, arg1, arg2, arg3)
```

Paragraph in between.

    No paragraph between this and the next


```
┌───┐
│ × │
└───┘
```


Here we see a horizontal rule:

- - -

How do emoji render? 🤔 👌 🚀
