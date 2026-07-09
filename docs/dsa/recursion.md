---
outline: deep
---

# Mastering Recursion: the Foundations


> Understanding when to use recursion, how to structure recursive functions, and how to go through any recursive code.


Recursion is one of those topics that many software engineers “understand” in theory but struggle with in practice. They know the textbook definition (a function that calls itself). They have seen the Fibonacci example multiple times. But when they are asked to solve a recursive problem in an interview, something doesn’t work.

The problem is not that they are not smart, but that they don’t have the correct mental models. It took me a while to figure this out. When someone explained it to me, I was able to follow recursive code, but writing it from scratch often felt like guessing. The turning point was when I stopped thinking of recursion as a single, isolated technique and began seeing it as a set of patterns, each with its own structure.

In this article, we will start building the basic mental models you need to actually use recursion. In future articles, we will apply these foundations to specific patterns and problems.

The outline is as follows:

- When to use recursion

- The two building blocks: base case and recursive step

- Three ways to return results from recursive functions

- How to trace any recursive code (even when you’re lost)

- Time and space complexity for recursion

- A preview of the six recursive patterns


## When to Use Recursion
There is a fact about recursion that people often overlook: any problem that can be solved recursively can also be solved iteratively. There is no case where you need to use recursion.

So the right question isn’t “can I use recursion here?” but rather “is recursion easier here?” There are a few questions you can ask yourself to figure this out.

1. Does the problem break down into subproblems? This is mostly what recursion is about. If a problem breaks into smaller versions of itself, recursion is probably a good fit. For example, sorting an array can be decomposed into sorting two halves and merging them. Finding a path through a maze can be broken into taking one step and finding a path from there.

2. Could you solve the problem using an arbitrary number of for loops? This point gets people confused. Let’s say you are asked to print all possible 6-digit numbers. It sounds easy: you can just write six nested for loops, one for each digit. But what if you are told to print all possible n-digit numbers? You can't write n nested for loops anymore since the number of loops changes depending on the input. This is an excellent example of when to use recursion, because it effectively allows you to create arbitrary nesting.

3. Does the problem fit one of the common recursive patterns? For most recursive problems you see in interviews, there are six patterns that you can look for. We’ll preview them at the end of this article and cover them in depth in future ones. If you recognize that a problem fits one of these patterns, that is a strong hint to use recursion.

4. Is it easier to solve recursively than iteratively? Sometimes the recursive code is just cleaner. Consider the task of printing a linked list in reverse order. Without recursion, you would have to push all the values onto a stack, then pop and print them. Recursively, the process reduces to three lines of code:

```python
def print_reverse(node):
    if node is None:
        return

    print_reverse(node.next)
    print(node.value)
```
The recursive version uses the call stack as your stack, so you don’t need to explicitly manage one yourself. The code is more concise and probably easier to grasp.

However, there is a trade-off. If the time complexity is the same, the iterative solution usually runs faster. Function calls, stack frames, and other things that recursion does all add up. In general, if you have the possibility to choose between two equally simple recursive and iterative solutions, the iterative one will perform better.

But in an interview, clarity often matters more than micro-optimizations, so it is wise to pick whatever approach lets you write correct, readable code faster.

## Base Case and Recursive Step
Every recursive function has two essential building blocks: a base case and a recursive step. Getting these right is what separates working code from infinite loops and stack overflows.

The base case is the point at which the recursion stops. It is the simplest form of the problem, and it can be solved immediately without any further recursive calls.

A useful technique for identifying the base case is to start with small examples. What is the answer when the input size is zero or one? These edge cases are usually the base cases.

For example, if you are writing a function to compute the sum of an array of integers, an empty array has a sum of 0, and an array with one element has a sum equal to that element. Both can be solved without recursion, making them natural base cases.

There is one important rule to follow here: the base case must match the return type of your function. If your function returns a list, your base case must return a list (not None or 0). This sounds obvious, but it is a common source of bugs. People often get stuck on this because they try to guess what the base case is instead of using concrete examples to figure it out.

```python
# Wrong: function returns a list, but base case returns None
def get_combinations(items):
    if len(items) == 0:
        return None  # This will break the calling code
    ...

# Correct: base case returns an empty list
def get_combinations(items):
    if len(items) == 0:
        return [[]]  # A list containing the empty combination
    ...
```
In the recursive step, you divide the problem into smaller subproblems and combine the results. There are two things to keep in mind here.

The first is that a subproblem should have the same shape as the original problem. If your function computes the sum of elements of an array from index i to the end, then your recursive call should compute the sum of elements from index i+1 to the end. The meaning is the same, just applied to a smaller input.

The second critical thing is that the recursive step must converge to the base case. If your base case is i == 0 and your recursive call passes i + 1, you are moving away from the base case, not toward it. This causes an infinite recursion and eventually a stack overflow.

```python
# Wrong: moves away from base case
def countdown(n):
    if n == 0:
        return
    countdown(n + 1)  # n grows, never reaches 0

# Correct: moves toward base case
def countdown(n):
    if n == 0:
        return
    countdown(n - 1)  # n shrinks toward 0
```
When you are writing code in an interview, you don’t get to run your code and see the stack overflow error. You need to find this mistake by looking at the code you wrote. A quick check that your recursive step gets you closer to the base case can save you from an embarrassing bug.

## Three Ways to Return Results
When you write a recursive function, you need to decide how to collect and return the results. There are three main ways you can do this: use a global variable, use a passed variable, or build up results as you return. Each has its trade-offs.

The simplest approach is to use a global variable. You set a variable outside the code and change it as the recursion proceeds. As an example, consider the following code snippet that counts all the even numbers in an array:
```python
def count_evens(arr, i):
    global result
    if i == len(arr):
        return
    if arr[i] % 2 == 0:
        result += 1
    count_evens(arr, i + 1)
```
This works, but global variables are generally not a good idea. They make code harder to test and reason about. A better alternative is to use a passed variable.

When using a passed variable, you pass a mutable object (like a list or a wrapper class) into your function and update it as you go through the recursive calls. This stays away from a global state and follows simple logic: