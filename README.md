# Welcome to...
### the allinrva website

Hey All! it's Suzana
this is github and this is our website. anyone on the team who
makes an account and requests access can come here and make edits.
Edits, once approved by someone with access, automatically publish
to the site, almost immediately.


## The Files

### *.html
There are 5 main pages for our site right now. index.html is the landing page.
Everything else that ends in *.html is also a main site page. Html works with
a system of carats and slashes >  <  /
~~~~~
<tag-name>
        <other-tag-name property="this is some code that you can probably ignore">
                Hi! I'm some words inside of two sets of tags!!
                Above are two opening tags called "tag-name" and "other-tag-name"
                Below are two tags with the same exact name except they start with a /slash
                Those are the closing tags! The opening and closing tag have to have
                the same name, but the opening tag sometimes has some extra code after
                the name.
        </other-tag-name>
</tag-name>
~~~~~
Paying attention to what's inside the carats helps you understand how the computer browser
sees the layout of the page. But the stuff not inside carats, thats mostly the stuff that
people will actually see. You can start by directly editing the content in a text editor,
and only worry about the tags once you start to recognize them.

### *.css
CSS is a design system for the html. Colors, fonts, sizes, positions, animations,
and everything else can be coded in here. Our css file is under the /assets folder.
CSS is a different coding system than html, mostly based on a system of 
braces {  } colons : and semicolons ; Let's try out an example
~~~~~
tag-name .class-name{
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
    <inside-tag>
            I am also in white 12pt Times New Roman.
            I'm not directly inside the right tag.
            But I am inside-of being inside-of the right tag.
            And so the "inside-tag" gets grandfathered in,
            by being a child tag of "tag-name.class-name"
    </inside-tag>
</tag-name>
~~~~~
That's the basics of how css punctuation and grammar work.

### /assets
The assets folder holds our css files right now, but it also holds pictures, logos, icons
anything else we want to post to our site.
