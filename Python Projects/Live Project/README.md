# Python Live Project

# Introduction
  During my last course at the Tech Academy, I took part alongside my fellow students adding onto a Django project in progress. We each were responsible for adding our own apps to the project with each app being built to feature CRUD functionality for a database of our choosing. Utilizing daily stand-ups and our weekly code retrospectives kept us accountable and managing our code accordingly. Version control was key during this time with multiple pull requests daily.
Designing my own app allowed me to work on several front end and back end stories, debugging and improving the UX as my app grew. I am very proud of the visualizer used for displaying details of a specific model, using text and CSS to allow the user to view the item with some color. 

  During the 2-week sprint I learned how to code as a team and using the Agile Method to manage a larger project which I will bring to all future projects. 
  
  The templates for the web pages and the full views and script file are added within the repository  for the full scope of
the app.

# CRUD Functionality
  Each app was expected to have full CRUD functionality. For my database I chose a mythical beast generator as I felt the options provided would benefit the visualizer for my apps details page. Below are snippets and info on the stories I was assigned and the features implemented.
  
  
# Skills Acquired
- How to use Agile methods to keep myself accountable and on track. Daily standups  to start the day coding right and weekly Code Retrospectives to see where we can improve.
- How to combine different languages and get them to work together. Python, JavaScript, and CSS all combined to display and control an HTML document. 
- Practice coding as a team. Using Git and PyCharm's Version Control to ensure my modifications of the project did not conflict with my team's own changes.
- Experience with the Django Framework and Model-View-Template architectures. I learned how to use Block Tags and have my page templates inherit from a base file. Mapping URLs to my Views and validating my forms with csrf tokens.


## User Stories for Project
- [Story 2: Create your model](https://github.com/WMorf/LiveProjectSummary/blob/main/README.md#create)
- [Story 3 & 4: Display all items from database and Details Page](https://github.com/WMorf/LiveProjectSummary/blob/main/README.md#read)
- [Story 5: Edit and Delete Functions](https://github.com/WMorf/LiveProjectSummary/blob/main/README.md#update-and-delete)
- [Stories 6 & 7: Beautiful Soup](https://github.com/WMorf/LiveProjectSummary/blob/main/README.md#web-scraping)
- [Stories 6 & 7: API](https://github.com/WMorf/LiveProjectSummary/blob/main/README.md#api)
- [Story 8: Front End Improvements](https://github.com/WMorf/LiveProjectSummary/blob/main/README.md#front-end-development)


# Create
  A create new button was added to the home page linking to the create page. A form can then be filled out and submitting adding an "Fbeast" (Forgotten Beast) object to the database.

![create](https://user-images.githubusercontent.com/104522992/179842713-7b259d86-b49e-45a0-b85a-8052fe48ba65.gif)
- [Home Page](https://github.com/WMorf/LiveProjectSummary/blob/main/HTML%20Templates/dfort_home.html)


**models.py**

```
SKIN_CHOICES = {
  ('meat','meat'),
  ('metal','metal'),
  ('fungus','fungus'),
  ('scale','scale'),
  ('gem','gem'),
}

BEAST_CHOICES = {
    ('unknown','unknown'),
    ('canine','canine'),
    ('feline','feline'),
    ('reptilian','reptilian'),
    ('avian','avian'),
    ('amphibian','amphibian'),
}

POWER_CHOICES = {
    ('ominous presence','ominous presence'),
    ('deadly dust','deadly dust'),
    ('menacing spikes','menacing spikes'),
    ('firey breath','firey breath'),
    ('sticky webs','sticky webs'),
}

class Fbeast(models.Model):
    name = models.CharField(max_length=60, default="", null=False)
    title = models.CharField(max_length=60, default="Forgotten Beast")
    skin = models.CharField(max_length=60, choices=SKIN_CHOICES)
    species = models.CharField(max_length=60, choices=BEAST_CHOICES)
    power = models.CharField(max_length=60, choices=POWER_CHOICES)

    Fbeasts = models.Manager()

    def __str__(self):
        return self.name
```

[**views.py**](https://github.com/WMorf/LiveProjectSummary/blob/main/Python/views.py)

```
def dfort_create(request):
    form = FbeastForm(data=request.POST or None)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('dfort_home')
    context = {'form': form}
    return  render(request, 'DwarfFort/dfort_create.html', context)
```

# Read
Next we were tasked with displaying all items from the database and linking a details page for specific items. The display page and home screen both feature a search bar as well, allowing the user to search the database by the object's "name" attribute and print the results to a result page. The display page also utilizes Pagination to limit results to specified amount. (3 for easy debugging) 
  
![detail](https://user-images.githubusercontent.com/104522992/179844213-bd7fb10e-8a99-46f2-b7b3-dc1b600cd24f.gif)
- [Display Page](https://github.com/WMorf/LiveProjectSummary/blob/main/HTML%20Templates/dfort_display.html)
- [Details Page](https://github.com/WMorf/LiveProjectSummary/blob/main/HTML%20Templates/dfort_details.html)


[**views.py**](https://github.com/WMorf/LiveProjectSummary/blob/main/Python/views.py)

```
def dfort_display(request):
    beast = Fbeast.Fbeasts.all().order_by("title")

    # builds collection of models from beast and limits display to 3 at a time
    paginator = Paginator(beast, 3)
    page = request.GET.get('page')
    beastpage = paginator.get_page(page)


    context = {'beastpage' : beastpage, 'beast' : beast}

    return render(request, 'DwarfFort/dfort_display.html', context)


def dfort_search(request):
    if request.method == "POST":
        name = request.POST.get('usr_query')
        beast = Fbeast.Fbeasts.filter(name=name)
        context = { 'name' : name, 'beast' : beast}

        return render(request, 'DwarfFort/dfort_search.html', context)
```

  The details page was very satisfying to work on as I was able to build a visualizer of sorts for each object. I first created the necessary  functions to display the information for a specific item. When a user clicks on an item from the display screen they are directed to my details page where the object in question is determined using it's Primary Key and then relayed to the user in a neat fashion as well as an accompanying image depending on the "species" selected by the user.

```
def dfort_details(request, pk):
    pk = int(pk)
    item = get_object_or_404(Fbeast, pk=pk)
    form = FbeastForm(data=request.POST or None, instance=item)
    beast = Fbeast.Fbeasts.all().order_by('pk')

    # Dictionary for visualizer
    # Builds a different dictionary to display different species types


    # Material Visual

    if item.skin == 'meat':
        material = 'meat'

    elif item.skin == 'metal':
        material = 'metal'

    elif item.skin == 'fungus':
        material = 'fungus'

    elif item.skin == 'scale':
        material = 'scale'

    elif item.skin == 'gem':
        material = 'gem'

    # Species Visual

    if item.species == 'reptilian':

      beast_body = {'top1': ' {(")} ',
                    'top2': '_--+--_',
                    'mid': ' / |   | \ ',
                    'bot1': '[  |__|  ]',
                    'bot2': ' _/  \_ '}
    
    elif item.species == 'avian':

      beast_body = {'top1': '  }B>  ',
                    'top2': ' o-^-o ',
                    'mid': '[|   |]',
                    'bot1': '[ \_/ ]',
                    'bot2': '  | |  '}

    elif item.species == 'canine':

      beast_body = {'top1': '  [:P  ',
                    'top2': ' <-|-> ',
                    'mid': '|| # ||',
                    'bot1': 'V \#/ V',
                    'bot2': ' _| |_ '}

    elif item.species == 'amphibian':

      beast_body = {'top1': '  ,_,  ',
                    'top2': ' (00) ',
                    'mid': 'T( ~ )T',
                    'bot1': '" \_/ "',
                    'bot2': '  ( )  '}

    else:
      # debug to check case being met
      print('none')

      beast_body = {'top1': '  ___  ',
                    'top2': ' ( ~ ) ',
                    'mid': '(  0  )',
                    'bot1': '(_____)',
                    'bot2': ' |   | '}

    context = {'form': form, 'item': item, 'beast_body': beast_body, 'beast' : beast, 'material' : material}

    return render(request, 'DwarfFort/dfort_details.html', context)
```

  In a [later story](https://github.com/WMorf/LiveProjectSummary/blob/main/README.md#front-end-development), [javascript](https://github.com/WMorf/LiveProjectSummary/blob/main/JavaScript/dfort_visualizer.js) was used to add extra detail depending on details of the item.

# Update and Delete


  From the details page the user can click to alter the object and is directed to the edit page. Again using the Primary Key, the correct info for that object is displayed in a form given to the user allowing them to make changes as if they were creating an object.

![edit](https://user-images.githubusercontent.com/104522992/179844926-f6fc97ec-a158-4851-9590-849e1c67fcdc.gif)
- [Edit Page](https://github.com/WMorf/LiveProjectSummary/blob/main/HTML%20Templates/dfort_edit.html)


[**views.py**](https://github.com/WMorf/LiveProjectSummary/blob/main/Python/views.py)

```

def dfort_edit(request, pk):
    pk = int(pk)
    item = get_object_or_404(Fbeast, pk=pk)
    form = FbeastForm(data=request.POST or None, instance=item)
    if request.method == 'POST':
        if form.is_valid():
            form.save()
            return redirect('dfort_home')

    context = {'form': form, 'item': item}

    return render(request, 'DwarfFort/dfort_edit.html', context)


def dfort_delete(request, pk):
    pk = int(pk)
    item = get_object_or_404(Fbeast, pk=pk)
    context = {"item": item, }
    item.delete()

    return render(request, "DwarfFort/dfort_delete.html", context)
```

[**JavaScript**](https://github.com/WMorf/LiveProjectSummary/blob/main/JavaScript/dfort_script.js)

The page also features a delete confirmation modal using CSS and JavaScript. When the delete button is clicked by the user, a previously hidden element is displayed holding the actual delete button. The user is then taken to a confirmation page displaying the object deleted.

```

/*Delete Modal*/
var modal = document.getElementById("delete-modal");
var btn = document.getElementById("button-modal");
var close = document.getElementById("modal-close");


// listener for click on button to open the modal
if (document.getElementById("button-modal") !== null) {
    btn.onclick = function() {
        modal.style.display = "block";
    }
}

// listener for click on close button
if (document.getElementById("modal-close") !== null) {
    close.onclick = function() {
        modal.style.display = "none";
    }
}

```


# Web Scraping

  For my next story I was tasked  to use the Beautiful Soup Python Library to scrape a website and display it within the app. I Chose to pull the latest 3 news posts from a VIdeo Game website that features the Mythical Creatures I based my model on. The paragraph and date elements were pulled from the website which I then in turn displayed on my news page.
  
![news](https://user-images.githubusercontent.com/104522992/179846107-279bce62-2966-427c-9c0b-1f36f857207f.gif)
- [News Page](https://github.com/WMorf/LiveProjectSummary/blob/main/HTML%20Templates/dfort_news.html)
  

[**views.py**](https://github.com/WMorf/LiveProjectSummary/blob/main/Python/views.py)

```

def dfort_news(request):
    
    news = requests.get("http://www.bay12games.com/dwarves/") # Website
    soup = BeautifulSoup(news.content, 'html.parser')

    # all news posts are list items and the first is the latest so an easy grab
    # get text returns text instead of html elements
    # find stops after 1 result, find all keeps searching beyond first result

    # Dates of news posts
    all_dates = {
        'date1' : soup.find_all(class_='date')[0].get_text(),
        'date2': soup.find_all(class_='date')[1].get_text(),
        'date3': soup.find_all(class_='date')[2].get_text(),
    }

    # text of news posts
    all_news = {
        'news1' : soup.find_all('li')[0].get_text(),
        'news2' : soup.find_all('li')[1].get_text(),
        'news3' : soup.find_all('li')[2].get_text(),
        }


    context = {'all_news' : all_news, 'all_dates' : all_dates}

    return render(request, "DwarfFort/dfort_news.html", context)

```
    
  JavaScript was then added to cycle between the pages when the user clicks the "Next" or "Prev" buttons.
    
[**JavaScript**](https://github.com/WMorf/LiveProjectSummary/blob/main/JavaScript/dfort_news.js)
    
```

/* News Page*/
var latest_news = document.getElementById("latest-news");
var mid_news = document.getElementById("mid-news");
var last_news = document.getElementById("last-news");

/* Page 1 Next */
if (document.getElementById("news-btn1") !== null) {
    var news_btn1 = document.getElementById("news-btn1");
    news_btn1.onclick = function() {
        latest_news.style.display = "none";
        mid_news.style.display = "block";
    }
}

/* Page 2 Prev */
if (document.getElementById("news-btn2") !== null) {
    var news_btn2 = document.getElementById("news-btn2");
    news_btn2.onclick = function() {
        latest_news.style.display = "block";
        mid_news.style.display = "none";
    }
}

/* Page 2 Next */
if (document.getElementById("news-btn3") !== null) {
    var news_btn3 = document.getElementById("news-btn3");
    news_btn3.onclick = function() {
        mid_news.style.display = "none";
        last_news.style.display = "block";
    }
}

/* Page 3 Prev */
if (document.getElementById("news-btn4") !== null) {
    var news_btn4 = document.getElementById("news-btn4");
    news_btn4.onclick = function() {
        mid_news.style.display = "block";
        last_news.style.display = "none";
    }
}

```

# API

  Next I was tasked with using an API within my app. To keep with the "mythical theme" I used the Open5E roleplaying API which has access to various data from the tabletop game. The data I chose to access was the Monster Information. A search Bar was added to the page allowing the user to search via name for a mythical monster. The API will then return a JSON response which is then converted to a dictionary object. From there I was able to pull the necessary data and return it to the user in a neat and readable way. 
  
![api](https://user-images.githubusercontent.com/104522992/179846263-36bede77-9012-43bf-bfa1-406fc45824e8.gif)
- [API Page](https://github.com/WMorf/LiveProjectSummary/blob/main/HTML%20Templates/dfort_api.html)



[**views.py**](https://github.com/WMorf/LiveProjectSummary/blob/main/Python/views.py)

```
    # Debug printing full json to console
    info = textprint(response.json())
    print(info)


    # Pulls only needed fields and checks that there are results
    if len(response.json()['results']) > 0:
        result1 = {"slug": response.json()['results'][0]['slug'],
                "type": response.json()['results'][0]['type'],
                "size": response.json()['results'][0]['size'],
                "HP": response.json()['results'][0]['hit_points'],
                }
        display1= True

    if len(response.json()['results']) > 1:
        result2 = {"slug": response.json()['results'][1]['slug'],
                "type": response.json()['results'][1]['type'],
                "size": response.json()['results'][1]['size'],
                "HP": response.json()['results'][1]['hit_points'],
                }
        display2 = True
```

# Front End Development
  Finally I was tasked with adding Front End improvements to the app. Beyond general styling additions and button border highlights I added JavaScript to the details page, further providing feedback to the user based on their choices. The color of the visualizer will be updated based on the material selected in the model.
  
![story8](https://user-images.githubusercontent.com/104522992/179846299-72b0d45f-660d-4b72-9605-bffcbf796d70.png)


```

/* Grabs the hidden h6 tag value from details page and changes color of visual based on selected material */
if (document.getElementById("skin") !== null) {
    var skin = String(document.getElementById("skin").innerHTML);

    if (String(skin) == 'meat') {
        document.getElementById("beast-visual").style.color = "red";
        document.getElementById("skin-display").style.color = "red";
        console.log(skin);

    } else if (String(skin) == 'metal') {
        document.getElementById("beast-visual").style.color = "silver";
        document.getElementById("skin-display").style.color = "silver";
        console.log(skin);

    } else if (String(skin) == 'fungus') {
        document.getElementById("beast-visual").style.color = "purple";
        document.getElementById("skin-display").style.color = "purple";
        console.log(skin);

    } else if (String(skin) == 'scale') {
        document.getElementById("beast-visual").style.color = "green";
        document.getElementById("skin-display").style.color = "green";
        console.log(skin);

    } else if (String(skin) == 'gem') {
        document.getElementById("beast-visual").style.color = "hotpink";
        document.getElementById("skin-display").style.color = "hotpink";
        console.log(skin);
    }
}

```

