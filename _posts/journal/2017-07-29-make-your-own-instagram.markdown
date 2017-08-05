---
layout: post
title: "Make Your Own Instagram"
date: "2017-07-29 21:05:55 +0200"
tags: [hack, Facebook, tutorial]
image: https://c1.staticflickr.com/5/4314/36219052676_b19005346d_b.jpg
excerpt: "A simple tutorial on how to scrapes Instagram usernames and create a browsable web gallery."
---

I deleted my Facebook on June 10th 2016, and upon this event—now that I sense the irony of it—I decided to [tweet about it](https://twitter.com/mixania/status/743207933438099457). I jumped from one network to the other, without really realizing that both profit off of selling my behavioral data regardless. Even Twitter makes money off of ads and behavioral data, but nothing comes close to Facebook. Even Google does not come close to what Facebook knows about certain aspects of its users, and how it has the capability to manipulate them psychologically.[^1] In her book _Weapons of Math Destruction_, Cathy O'Neil talks much about these systems.

Now that Facebook owns Instagram and WhatsApp, I have continued my move away from these services. Summer is the perfect time for me to do these moves, since I no longer rely on communications as much as I do during other times of the year. As of now, I have no Facebook-owned apps installed on my phone, because I feel no urge to sell my data in exchange for a manipulative service. Especially since there are plenty of other alternatives.

## The Fix

But I have to say, it is hard to be without Instagram because I no longer see what my friends are up to. Maybe this is a good thing. But it would still be nice to have the ability to have access to the feeds of my friends without being exploited by Facebook.

### Getting the Username List

So first thing we have to do is get a list of usernames that we follow. There are plenty ways of doing this. Assuming that you don't follow more 10000's of accounts, the best way is to go to the web version of Instagram and click on the **Following** button to get a list of those who you follow.

![image1](https://c1.staticflickr.com/5/4302/36219049436_1dc3ede80d_c.jpg)  
Here we have a list of users that we follow.

Now we want to inspect each HTML element and find out the name of its HTML class. On Mac, we can press `Command+Option+I` to bring up the HTML inspector.

![image2](https://c1.staticflickr.com/5/4301/35427940454_f02bd0ea97_b.jpg)

By bringing the inspector, we can find out the HTML class name of each username element.

Now that we have the name of the HTML class which represents the usernames that we want, we need to output all the usernames into a list. In this particular example, the HTML class called `_4zhc5` is the one that represents the username text that we need to output into a list.

First, we have to paste a script that would allow us to save our username list to a text file. Here is a script, just paste it into your web console. It should work on most browsers.[^2]

{% highlight javascript %}
(function(console){
    console.save = function(data, filename){

      var blob = new Blob([data], {type: 'text/plain'}),
      e    = document.createEvent('MouseEvents'),
      a    = document.createElement('a')

      a.download = filename
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl =  ['text', a.download, a.href].join(':')
      e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(e)
    }
  })(console)
{% endhighlight %}

![image3](https://c1.staticflickr.com/5/4299/36260948285_2e7698639c_b.jpg)  
Like so, then press Enter.

Now we can paste the main script which will download a text file to our Downloads folder. Remember to substitute `_4zhc5` with whatever HTML class name that represents usernames.  

{% highlight javascript %}
var list = document.getElementsByClassName("_4zhc5"),
text = "";
// loop through the list array containing the usernames
for (i in list) {
  // keep adding to the text with a line break at the end
  text += list[i].innerText + " \n"
}
// download the file
console.save(text,"insta-following-list.txt")
{% endhighlight %}

Copy and paste this script into the console just like the previous one.

![image4](https://c1.staticflickr.com/5/4313/36260945015_e7995b5e5f_b.jpg)  

Once we do that, we should get a file with a list of usernames downloaded by our browser called `insta-following-list.txt` which will be formatted like so:

{% highlight text %}
user1
user2
user3

# and so on...
{% endhighlight %}

This is quite nice since we can now use this list to scrape the Instagram accounts of these listed usernames.

### Scraping Instagram

Now that we have a list of usernames that we want to scrape, we can use a script called [instagram-scraper](https://github.com/rarcega/instagram-scraper). Open a new window terminal and download the script and type in the following (ignore the `$` sign):

{% highlight bash %}
$ pip install instagram-scraper
{% endhighlight %}

Now create a folder in your _home_ directory to where we will scrape our Instagram content:

{% highlight bash %}
$ mkdir ~/my-instagram
{% endhighlight %}

{% highlight bash %}
$ instagram-scraper -n -d ~/my-instagram -f path/to/insta-following-list.txt -l -u your-username -p your password
{% endhighlight %}

#### Script Explanation

- Option `-n` tells the `instagram-scraper` command to create folders for each username instead of dumping all images into `my-instagram` folder.
- Option `-d` specifies the destination to which we want to scrape our content. In this case it is `~/my-instagram` where the `~/` specifies that it is located in your _home_ directory.
- Option `-f` specifies the file path to our `insta-following-list.txt`. Find the path to this file, an paste it. On Mac, it should be `~/Downloads/insta-following-list.txt`.
- The option `-l` signifies not to start script unless your login is successfully authenticated. This command is only necessary if you want to scrape private accounts. If you want to scrape only public accounts, use the command without `-l` and everything after it.   
  - Option `-u`specifies your Instagram username. Paste this without any quotes.
  - Option `-p`specifies your Instagram password. Paste this without any quotes.

Note that there might be some problems with logging in. Try resting your Instagram password and retry the command with the new password.

#### Result

Once you run the script successfully will should get folder structure similar to this:

{% highlight text %}
/my-instagram
  username1/
  username2/
  username3/
  .../
{% endhighlight %}

Now you have the Instagram content of all these usernames on their hard drive.

### Creating a Browsable Web-Gallery (Optional)

Now that we scraped all these images, what is the point if they are just stored on our computer? We can create a Browsable web-gallery using a script called [gallery_shell](https://github.com/Cyclenerd/gallery_shell).

Open a new terminal window and type the following:

Cd to your home directory:
{% highlight bash %}
$ cd ~/
{% endhighlight %}

Download the script:
{% highlight bash %}
$ git clone https://github.com/Cyclenerd/gallery_shell
{% endhighlight %}

Make the script executable:
{% highlight bash %}
$ chmod +x gallery_shell/gallery.sh
{% endhighlight %}

Now cd to the Instagram folder:
Cd to your home directory
{% highlight bash %}
$ cd my-instagram/
{% endhighlight %}

Now this script will go throughout all the username folders located in `my-instagram/` folder and create a browsable html page with thumbnails for each username folder:

{% highlight bash %}
for d in ~/my-instagram/*/; do (cd "$d" && ~/gallery_shell/gallery.sh); done
{% endhighlight %}

Done! Now we need to serve the web content using python:

{% highlight bash %}
$ python -m SimpleHTTPServer 8000
{% endhighlight %}

Now type [localhost:8000](http://localhost:8000) into your web browser and you should see a list of Instagram usernames:

![image5](https://c1.staticflickr.com/5/4304/36260943015_ecf2605911_c.jpg)

Once you click on ant of these links, you'll see a thumbnail gallery for each username, including private account if you chose to use your Instagram credentials.

![image6](https://c1.staticflickr.com/5/4321/35427930724_8decbfa6a0_c.jpg)

## Conclusion

This is not exactly a copy of Instagram and looks more like a hack, but it is a very great way to continue using Instagram without being subservient to the systems owned by Facebook. Plus, you will be able to backup Instagram Stories which disappear from Instagram after 24 hours.

For the next blog, We'll be looking at how to setup an Instagram backing up process.  

[^1]: This is not to state that Facebook takes advantage of this capability. In fact, even if it does, it would be hard for anyone outside of Facebook to prove it due to the nature of these hidden algorithms. However there is an abundance of evidence that Facebook does alter the feeds of its users.

[^2]: Script source [link](https://stackoverflow.com/questions/11849562/how-to-save-the-output-of-a-console-logobject-to-a-file)
