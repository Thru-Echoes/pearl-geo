# The fantastic try-catch-debugger trio

An incredibly useful behavior of JS in the web (and elsewhere) is the use of the try-catch statement along with a <code>debugger</code> call. This allows you to literally <strong>try</strong> whatever piece of code you put within the nice curly brackets and automatically <strong>catch</strong> the error (i.e. log the error). Not only that, but you can also place a <strong>debugger</strong> inside of the catch block so that the code pauses where the error happened - allowing you to perform a thorough investigation. This means that you can stop where the error occured and have a print out - through <code>console.log("An error like this: ", err);</code> - as well as the <strong>scope, call stack,</strong> and <strong>ability to run any and all code manually from there</strong>.

A fantastic trio!

## To Do:

Your job is to read through this little tutorial and play around with this try-catch-debugger trio in some of the files. In the next section of this file I describe what I did with manipulating the <code>D3js</code> library script. You will need to add this file to the <code>md-map.ejs</code> DOM file (remember that sort of just means HTML + CSS + JS file...) and check what the heck is happening!

<strong>NOTE: I will explain everything below. <strong>

### Overview

Here is an example JS function:

```
    function foo(arg1, arg2) {
        var myReturn;
        myReturn = arg1 / arg2;
        return myReturn;
    }

    var getFooValue = foo(100, 0);
    console.log("getFooValue with foo(100, 0): ", getFooValue);

    /* getFooValue will equal NaN... */
```

The function, <code>foo(arg1, arg2)</code> takes two arguments and returns one divided by the other. But! What if the denominator (i.e. <code>arg2</code>) is equal to <strong>0</strong>?? This would result in an impossible situation to solve numerically. Actually...JS would interpret this equation as equalling to <code>NaN</code> - a valid data type in code but nonsense mathematical variable.

Well, we do not want to return NaN from this function. So instead we can <strong>try</strong> and <strong>catch</strong> the error. Like so:

```
    function foo(arg1, arg2) {

        /*
            arg1 was passed in as 100
            arg2 was passed in as 0 (line 46 - see below)
        */

        try {

            var myReturn;
            myReturn = arg1 / arg2;
            return myReturn;

        } catch(err) {

            /* We caught the error here and passed it as "err" */
            console.log("An error happened in foo(): ", err);
            debugger;

        }
    }

    var getFooValue = foo(100, 0);
    console.log("getFooValue with foo(100, 0): ", getFooValue);

    /*
    We will NEVER get to this part of the code!

    Instead we will be caught in the "catch(err)" block of code
    */
```

There are two files you can check this out in - <code>noTry.js</code> and <code>withTry.js</code>.

### References

1. [Link to try-catch tutorial / reference 1](http://www.w3schools.com/js/js_errors.asp)
2. [Link to try-catch tutorial / reference 2](http://www.w3schools.com/jsref/jsref_try_catch.asp)

<br>
<hr>

## d3-oliver-mod.js

I have created a slight modification to the <code>D3js</code> library in a file called <code>d3-oliver-mod.js</code>. It is within this directory: <code>public/js</code>.

You need to add it to the <code>md-map.ejs</code> file (where scripts are called into the DOM / HTML file) and check out how it interacts with everything.

### To Do

1. open the files <code>tutorials/tut1.html</code> and <code>tutorials/tut2.html</code>
2. add file <code>d3-oliver-mod.js</code> to HTML page <code>views/md-map.ejs</code>
3. follow <code>try-catch</code> in developer mode
4. add <code>try-catch</code> with <strong>debugger</strong> in the <code>views/md-map.ejs</code> file
5. follow the results of point 3
