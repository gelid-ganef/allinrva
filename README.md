# Welcome to...
# the allinrva.org website

Hey All! it's Suzana
this is github and this is our website. this is mostly just for me to
refresh on some coding stuff and mess around. and try to avoid paying
a single cent to put our name up online XD

sorry for any messy code or missing comments/ documentation :`)

### wait what is github???
Github is just a place like Google Drive, where anyone on our team can upload and edit files in one place. This is also the staging loation for our web server. So anytime an edit gets accepted (by Suzi, I'm in charge here ^_^) Netlify gets notified automagicallly and posts the new version to the public immediately!

Okay, so you're allowed to edit stuff on here. But what if you mess something up! (you won't) What are even all these files?

## The Files

### any filename that starts with a dot (.)
#### so .eleventy.js or .eleventyignore, but also stuff package.json and package-lock.json, etc. honestly

You can just ignore all these from the jump! these files are mostly javascript code, and they're there to make Eleventy work. Eleventy is our SSG (static site generator) and it automatically builds a big complicated website from a bunch of individual source files. All this stuff on the main folder that talks directly to netlify, eleventy, or git is probably ignorable until something goes wrong :P All the real interesting stuff is in the folder called "/_src/" where we keep the source files that Eleventy reads, and uses to build the final website.

### *.html and *.webp
There are 5 main pages for our site right now. All to be found inside the "/_src/" folder,
where you should expect to find most content. index.webp is the landing page.
Everything else that ends in *.html or *.webp is also a main site page. Most of html works with
your plain english text, displayed as it is. HTML really only pays attention to three
symbols: side carats and forward slashes  ">"  "<"  "/"

here's a code sample:
~~~~~
<tag-name>
        <other-tag-name property="this is some code that you can probably ignore">
                Hi! I'm some words inside of two sets of tags!!
                Above are two opening tags called "tag-name" and "other-tag-name"
                Below are two tags with the same exact name except they start with a /slash
                Those are the closing tags! The opening and closing tag have to have
                the same name, and close in inside-out order. the opening tag sometimes
                has some extra code after the name that a closing tag doesn't, but it still 
                counts as the same name.
        </other-tag-name>
</tag-name>
~~~~~
Paying attention to what's inside the carats helps you understand how the computer browser
sees the layout of the page. But the stuff not inside carats, thats mostly the stuff that
people will actually see. You can start by directly editing the content in a text editor,
and only worry about the tags once you start to recognize them.

I have a few custom tags defined right now: /<contact-events/>, /<sticky-note/>, /<top-banner/>, and /<bottom-footer/> All of these are defined in the "/_components/" folder.

### *.css
CSS is a design system for the html documents. Colors, fonts, sizes, positions, animations,
and everything else can be coded in here. Our css file is under the /assets folder.
CSS is a different coding system than html, mostly based on a system of 
braces {  } colons : and semicolons ; Let's try out an example
~~~~~
tag-name.class-name{
    font-family: Times New Roman;
    color: white;
    font-size: 12pt;
}
~~~~~
That's css, it's trying to set a block of code to have certain styles. "font-family" and "color" are the
names of style properties that we can change. And we want those properties to be set to "Times New Roman" and
"white" respectively. Colon goes inbetween a property name and its' value. Semicolon goes inbetween setting
one style property and setting the next one. but css does nothing by itself. Let's look at how the above 
example rule will affect an html page
~~~~~
<tag-name>
    Hi! I have the right tag name ("tag-name")
    but I DO NOT appear with the above style?!
</tag-name>
<tag-name class="class-name">
        Hi! I appear in white 12pt Times New Roman,
        because my tag name AND my class name
        both match the CSS rules above!!
    <class-name>
            It almost looks like this should work,
            But when you use a dot (.) in your css
            selector, it looks for a tag that has
            "class='class-name'" in it's tag. A tag
            <em>named<em> "class-name" isn't the same.
    </class-name>
</tag-name>
~~~~~
So that's the basics of how css punctuation and grammar work.
CSS is super versatile for styling almost anything on the page.
If you need it styled, and this seems daunting, just talk to 
your developer, Suzi :)

## The Folders

### /assets
The assets folder holds our main css file right now, "style.css", and all of our images
related to the site. I have converted all of our images to "*.webp" for faster
load times. The conversion is actually pretty easy though. If you want to
upload an art asset as a "*.jpeg" or "*.png" or whatever that's fine, I'll do
the conversion whenever I have time.


### /_components/
For stuff that isn't it's own individual webpage, but is code that gets repeated a lot in
other places, we have the option of sticking it in a web component. When working with *.webp files, if Eleventy
sees an html tag it doesn't recognize
~~~~~
<some-godforsaken-tag-name>Hi! Welcome to all in!</some-godforsaken-tag-name>
~~~~~
Eleventy looks for the undefined tag in the "/_components/" folder. Specifically, it starts looking for a file with the same name, followed by some extension (some file named something like "/_components/some-godforsaken-tag-name.webp"). If it finds one, it'll automatically copy-paste that content into place where your custom tag is.

This stuff is a little less copywriting, a little more coding, not necessary to dig in here too much if you're uncomfortable. But if you want to tweak a component, you can come look here for the source code. And if you find yourself rewriting the same gobbledegook over and over, you can go stick it in one convenient place, so you stop repeating yourself. And if you find yourself rewriting the same gobbledegook over and over, you can go stick it in one convenient place, so you stop repeating yourself....!!!

WebP is a version of html that makes it easier to compose CSS styles right into your HTML code. (among other things) If you open up a *.webp file, especially in the /_components/ folder, your going to see a lot of CSS code up top.

### /_src/_includes/
Includes folder is only slightly different to components folder... because... reasons. Right now it includes our layout "base-layout.html" This chops the code-y-est parts of html, that would just get copy-pasted at the front of all our main site pages, and sticks it in a separate file. There's not a lot here. But if you want to add a <em>separate</em> *.css style file that applies to every sitepage, (separate from the main "/assets/style.css" stylesheet) you could add a new one here. This is also where you could change the "favicon" logo that appears in the corner of our websites tab on your browser. And it's here we tell every webpage where to find the fonts we use online.