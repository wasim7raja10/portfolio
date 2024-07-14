---
title: Pick Commits from One Branch to Another Using git cherry-pick
description: >-
  Learn how to use the git cherry-pick command to move specific commits from one
  branch to another.
pubDate: 2024-07-11T18:30:00.000Z
cover:
  url: /src/assets/images/blogs/git-cherry-pick-cover-image.png
  alt: git cherry-pick cover image - ai generated
tags:
  - git
---

Understanding the git cherry-pick command through a practical use case from my experience.

### Use Case

You have been working on a branch _abc_ and have pushed numerous commits to it. Now, you are working in a new branch _xyz_, which is a subset of _abc_, meaning there are a few files present in _abc_ that you don't want in _xyz_. You need the exact same code changes in _xyz_ that you made in _abc_. Remember that both branches are different and you don't intend to make it exactly same, so merging branch _abc_ in _xyz_ is out of question.

Instead of manually copying the changes, you can save time by using the git cherry-pick command to apply those commits from _abc_ to _xyz_.

Let's see how to do this.

### Using git cherry-pick

#### Syntax

```bash
git cherry-pick <commit_hash>
```

This command will cherry-pick the specified commit and apply it to the current branch. (Note: Make sure you are on the branch where you want to apply the commit.)

### Tips and Tricks

Suppose you need to cherry-pick a range of commits:

![Screenshot showing a list of git commits](</src/assets/images/blog-posts/git commits.png>)

You don't have to cherry-pick each commit individually. You can cherry-pick all the commits in one go using the following command:

```bash
git cherry-pick 0db04eb..5d2a08f
```

Note that the commit `0db04eb` is not included in this range. To include it, use:

```bash
git cherry-pick 0db04eb^..5d2a08f
```

### Additional Tips and Tricks

There are many other tips and tricks for using git cherry-pick that can make your workflow more efficient. For example, you can track where a particular commit was cherry-picked from or add a custom message during the cherry-pick for future reference. For more detailed information, I recommend reading [this article on cherry-pick](https://devconnected.com/how-to-cherry-pick-git-commits/).
