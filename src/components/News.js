import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Simone McCarthy, Rob Picheta, David Shortell, Oren Liebermann, Kaitlan Collins",
      "title": "Israel and Hamas agree to breakthrough deal on hostage release and four-day truce - CNN",
      "description": "Israel and Hamas have reached a breakthrough deal for a four-day pause in fighting and the release of at least 50 women and children held hostage in Gaza, marking a major de-escalatory step nearly seven weeks after the start of a conflict that has spiraled in…",
      "url": "https://www.cnn.com/2023/11/22/middleeast/israel-approves-hamas-hostage-deal-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231118204602-hamas-hostages-tel-aviv-111123.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-22T14:32:00Z",
      "content": "Israel and Hamas have reached a deal for a four-day pause in fighting and the release of at least 50 women and children held hostage in Gaza, marking a major diplomatic breakthrough nearly seven week… [+9987 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Jeffrey Dastin, Aditya Soni",
      "title": "Sam Altman to return as OpenAI CEO after his tumultuous ouster - Reuters",
      "description": "Sam Altman is returning as CEO of OpenAI just days after his ouster, capping frenzied discussions about the future of the startup at the center of an artificial intelligence boom.",
      "url": "https://www.reuters.com/technology/sam-altman-return-openai-ceo-2023-11-22/",
      "urlToImage": "https://www.reuters.com/resizer/y-h87DuTYyx7xPH30k8d0TYV4Hk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NZCQ6UQFVZIUPLMBJBWDCFOXX4.jpg",
      "publishedAt": "2023-11-22T13:51:47Z",
      "content": "SAN FRANCISCO, Nov 22 (Reuters) - Sam Altman is returning as CEO of OpenAI just days after his ouster, capping frenzied discussions about the future of the startup at the center of an artificial inte… [+5288 chars]"
    },
    {
      "source": {
        "id": "the-wall-street-journal",
        "name": "The Wall Street Journal"
      },
      "author": "Dov Lieber, Omar Abdel-Baqui",
      "title": "Inside Israel's Campaign to Prove a Gaza Hospital Was a Hamas Command Center - The Wall Street Journal",
      "description": "The humanitarian fallout from the war has heaped pressure on Israel to justify its seizure of Al-Shifa Hospital",
      "url": "https://www.wsj.com/world/middle-east/inside-israels-campaign-to-prove-a-gaza-hospital-was-a-hamas-command-center-65e655ee",
      "urlToImage": "https://images.wsj.net/im-890483/social",
      "publishedAt": "2023-11-22T13:19:00Z",
      "content": "The Israeli military has stepped up its efforts to produce evidence that Gazas largest hospital was a Hamas command center, as the humanitarian fallout from war and \r\nseizure of Al-Shifa Hospital has… [+484 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Tom Warren",
      "title": "Microsoft's AI-powered Copilot for Windows 10 is now available to test - The Verge",
      "description": "Copilot is rolling out to Windows 10 testers. It’s part of Microsoft’s plans to reinvest in Windows 10 with AI features ahead of a rumored new version of Windows.",
      "url": "https://www.theverge.com/2023/11/22/23972257/microsoft-windows-10-copilot-feature-release-preview-testing",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/e6CRT-0TrOljLA1dvuR65Q3b23g=/0x0:3840x2400/1200x628/filters:focal(1920x1200:1921x1201)/cdn.vox-cdn.com/uploads/chorus_asset/file/25089665/IMG_6382.png",
      "publishedAt": "2023-11-22T13:16:13Z",
      "content": "Microsofts AI-powered Copilot for Windows 10 is now available to test\r\nMicrosofts AI-powered Copilot for Windows 10 is now available to test\r\n / Windows 10 users can now try out a preview of Copilot,… [+2263 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Philip Pullella",
      "title": "Pope says Israel-Hamas conflict has gone beyond war to 'terrorism' - Reuters",
      "description": "Pope Francis on Wednesday met separately with Israeli relatives of hostages held by Hamas and Palestinians with family in Gaza and said the conflict had gone beyond war to become \"terrorism\".",
      "url": "https://www.reuters.com/world/pope-says-conflict-between-israel-hamas-has-gone-beyond-war-terrorism-2023-11-22/",
      "urlToImage": "https://www.reuters.com/resizer/yhc7hlZzYwrJL87RSY40_1EpTc0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6WDM6HFJJZOLXLIOASPAR4IK2Q.jpg",
      "publishedAt": "2023-11-22T13:14:00Z",
      "content": "VATICAN CITY, Nov 22 (Reuters) - Pope Francis on Wednesday met separately with Israeli relatives of hostages held by Hamas and Palestinians with family in Gaza and said the conflict had gone beyond w… [+2282 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CBS Sports"
      },
      "author": "",
      "title": "Prisco's Week 12 NFL picks: Cowboys feast on Commanders, Jaguars beat Texans in battle atop AFC South - CBS Sports",
      "description": "Pete Prisco shares all his Week 12 picks, including who'll win a shootout between the Bills and Eagles",
      "url": "https://www.cbssports.com/nfl/news/priscos-week-12-nfl-picks-cowboys-feast-on-commanders-jaguars-beat-texans-in-battle-atop-afc-south/",
      "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/11/22/94510edd-eb3c-4f9c-ac83-55785e0f46eb/thumbnail/1200x675/6ab20710edd277140003df5eba43511b/dakprescott1.jpg",
      "publishedAt": "2023-11-22T13:11:17Z",
      "content": "I did it. I made it over .500 for the season picking NFL games against the spread. Let's celebrate.\r\nIt's been a heck of a climb, one that has taken a few weeks. But after going 8-6 last week, I am n… [+6555 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": null,
      "title": "Police warn residents to stay indoors after \"extremely venomous\" green mamba snake escapes in the Netherlands - CBS News",
      "description": "Issuing a wanted poster with a mugshot of the coiled green mamba, police warned: \"The snake is very dangerous.\"",
      "url": "https://www.cbsnews.com/news/green-mamba-snake-on-the-loose-netherlands-extremely-venomous-police-warning/",
      "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2023/11/22/a9cc08b6-6e6c-48f4-83c2-8a644ca9fc86/thumbnail/1200x630/90b834c72ba8ef40ed653c082ae737f0/snake.jpg?v=5659e73acd91751548aa89950cf015b0",
      "publishedAt": "2023-11-22T12:39:49Z",
      "content": "An \"extremely venomous\" two-meter-long green mamba snake is on the loose in the Netherlands, police said Tuesday, warning residents to stay indoors and under no circumstances attempt to ensnare the s… [+1480 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "S. Dev",
      "title": "Several U.S. service members injured in missile attack at Al-Asad Airbase in Iraq, Pentagon says - CBS News",
      "description": "Monday's strike was the 66th attack against American-affiliated bases in Iraq and Syria since Oct. 17, Pentagon officials said.",
      "url": "https://www.cbsnews.com/news/us-service-members-injured-missile-attack-al-asad-airbase-iraq/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/21/dc9d7318-8630-41b5-9f94-99edf83b06fb/thumbnail/1200x630/15bd9987ca1d88708be5599d03343b08/gettyimages-458175702.jpg?v=5659e73acd91751548aa89950cf015b0",
      "publishedAt": "2023-11-22T12:28:00Z",
      "content": "Several U.S. service members were injured in a ballistic missile attack by Iranian-backed militias on Al-Asad Airbase in Iraq, Pentagon officials said Tuesday. The attack Monday night on U.S. and coa… [+3638 chars]"
    },
    {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Stephen Smith",
      "title": "Love triangle revealed after California man fatally stabbed in case involving texts, video and a Selena Gomez song - CBS News",
      "description": "Evidence in the case allegedly included incriminating texts, surveillance video and a Selena Gomez song.",
      "url": "https://www.cbsnews.com/news/wife-alleged-lover-arrested-stabbing-murder-husband-hayward-california-police/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/22/b5c3713d-5746-4c72-b413-4c2a5f5b1da9/thumbnail/1200x630/f8f6ce25cf1ac77a1cbee852c7e2705b/hayward-police.jpg?v=5659e73acd91751548aa89950cf015b0",
      "publishedAt": "2023-11-22T12:16:34Z",
      "content": "A woman and her alleged lover have been arrested more than a month after her husband was stabbed to death outside his home in Northern California, police said, in a case that included incriminating t… [+2547 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Matias Grez",
      "title": "Brazil vs. Argentina: Historic World Cup qualifier is overshadowed by violence and chaos at the Maracanã stadium - CNN",
      "description": "Brazil suffered its first ever home World Cup qualifying defeat on Tuesday, as Argentina earned a 1-0 win on a night of violence and chaos at the iconic Maracanã stadium.",
      "url": "https://www.cnn.com/2023/11/22/sport/brazil-argentina-world-cup-qualifying-fan-violence-spt-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231122093931-05-argentina-brazil-112123.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-22T11:57:00Z",
      "content": "Brazil suffered its first ever home World Cup qualifying defeat on Tuesday, as Argentina earned a 1-0 win on a night of violence and chaos at the iconic Maracanã stadium.\r\nDefender Nicolas Otamendis … [+3955 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Detroit Free Press"
      },
      "author": null,
      "title": "Can Michigan, Ohio State both make College Football Playoff? Paths for loser of 'The Game' - Detroit Free Press",
      "description": "Brazil suffered its first ever home World Cup qualifying defeat on Tuesday, as Argentina earned a 1-0 win on a night of violence and chaos at the iconic Maracanã stadium.",
      "url": "https://www.freep.com/story/sports/college/university-michigan/wolverines/2023/11/22/michigan-ohio-state-loser-college-football-playoff-scenarios-big-ten-buckeyes-wolverines/71646681007/",
      "urlToImage": null,
      "publishedAt": "2023-11-22T11:10:54Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Mike Wall",
      "title": "Epic 33-engine burn among successes of of Starship's 2nd test flight - Space.com",
      "description": "'All 33 Raptor engines on the Super Heavy Booster started up successfully and, for the first time, completed a full-duration burn during ascent.'",
      "url": "https://www.space.com/spacex-starship-second-test-flight-milestones",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ZW6aFHbMYgrgQ6fe4Emnfn-1200-80.jpg",
      "publishedAt": "2023-11-22T11:00:31Z",
      "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
    },
    {
      "source": {
        "id": null,
        "name": "WCPO"
      },
      "author": "John Matarese",
      "title": "What to buy at Black Friday sales, what to hold off buying - WCPO 9 Cincinnati",
      "description": "Great sales on electronics, appliances, gaming consoles, and more",
      "url": "https://www.wcpo.com/money/consumer/dont-waste-your-money/what-to-buy-at-black-friday-sales-what-to-hold-off-buying",
      "urlToImage": "https://ewscripps.brightspotcdn.com/dims4/default/657799e/2147483647/strip/true/crop/640x336+0+72/resize/1200x630!/quality/90/?url=https%3A%2F%2Fsharing.wcpo.com%2Fsharescnn%2Fphoto%2F2016%2F08%2F19%2FGettyImages-498934976_1471625433100_44619916_ver1.0_640_480.jpg",
      "publishedAt": "2023-11-22T11:00:00Z",
      "content": "The deals are now going live: toys, electronics, appliances, and clothes, all on sale for Black Friday,\r\nThe toughest part, though, is figuring out where and when to shop.\r\nPamela Mikeela was taking … [+2789 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Steve Dent",
      "title": "The AI startup behind Stable Diffusion is now testing generative video - Engadget",
      "description": "Stable Diffusion's generative art can now be animated, developer Stability AI announced.",
      "url": "https://www.engadget.com/the-ai-startup-behind-stable-diffusion-is-now-testing-generative-video-105519658.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/CenrO0aQTTb06nMum3vGaw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-11/e4ca6f40-8913-11ee-bff7-560415d503e2",
      "publishedAt": "2023-11-22T10:55:19Z",
      "content": "Stable Diffusion's generative art can now be animated, developer Stability AI announced. The company has released a new product called Stable Video Diffusion into a research preview, allowing users t… [+2368 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Paul Davidson",
      "title": "Inflation could be behind slowed consumer spending ahead of holidays - USA TODAY",
      "description": "Americans are turning more cautious ahead of the critical holiday shopping season as they grapple with high prices, dwindling savings and rising debt.",
      "url": "https://www.usatoday.com/story/money/2023/11/22/consumer-spending-slows-holidays-inflation/71659583007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/20/USAT/71659242007-1245096422.jpg?crop=4694,2642,x0,y259&width=3200&height=1802&format=pjpg&auto=webp",
      "publishedAt": "2023-11-22T10:21:04Z",
      "content": "Kelly Bergl traditionally has gone on spending sprees for the holidays, a ritual that was turbocharged by the pandemic.\r\nShe would buy chocolate from Harrods in London, lots of stocking stuffers for … [+6215 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Newsday"
      },
      "author": "Lisa L. Colangelo",
      "title": "As mysterious dog illness spreads, Long Island canine owners, vets keeping vigilant - Newsday",
      "description": "Some dogs have bronchitis and some develop antibiotic-resistant pneumonia.",
      "url": "https://www.newsday.com/news/health/dog-mystery-illness-owners-wsx02rq5",
      "urlToImage": "https://cdn.newsday.com/ace/c:ZDNjMDRlZDEtZmY3Ny00:ZTg1N2U3/landscape/1280",
      "publishedAt": "2023-11-22T10:02:19Z",
      "content": "Dog owners and veterinarians on Long Island are keeping an eye out for a mysterious respiratory illness that has sickened and even killed some canines in other parts of the country.\r\nWhile the illnes… [+3238 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Philadelphia Inquirer"
      },
      "author": "Karen F. Zeitz",
      "title": "What I remember when John F. Kennedy was assassinated, 60 years ago | Opinion - The Philadelphia Inquirer",
      "description": "We didn’t know then that the bullets aimed at JFK were harbingers of yet more murders of our heroes.",
      "url": "https://www.inquirer.com/opinion/commentary/jfk-assassination-60-year-anniversary-20231122.html",
      "urlToImage": "https://www.inquirer.com/resizer/-m15TmCegIVWICy7wnSI7N8Bh-4=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/UA5GR7B3YRBZJNOFUBZQYTMPHQ.jpg",
      "publishedAt": "2023-11-22T10:00:00Z",
      "content": "On Nov. 22, 1963, I was 14 years old, a sophomore at Northeast High School. We were in gym class, out on the hockey field, the last period on a partly cloudy Friday afternoon. We hadnt been outside v… [+3901 chars]"
    },
    {
      "source": {
        "id": "the-jerusalem-post",
        "name": "The Jerusalem Post"
      },
      "author": "By  ALEJANDRA MOLINA/LA TIMES",
      "title": "Melissa Barrera dropped from 'Scream VII' after pro-Palestinian posts - The Jerusalem Post",
      "description": "\"And just like our histories, people are still silently watching it all happen. THIS IS GENOCIDE & ETHNIC CLEANSING,\" the actress stated in an Instagram post.",
      "url": "https://www.jpost.com/j-spot/article-774527",
      "urlToImage": "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/564797",
      "publishedAt": "2023-11-22T09:50:00Z",
      "content": "Actor Melissa Barrera is no longer appearing in the upcoming horror franchise film “Scream VII” after the actor shared pro-Palestinian statements on social media that some believed crossed a line int… [+1938 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "SciTechDaily"
      },
      "author": null,
      "title": "Hidden Wonders: Webb Space Telescope Detects Unexplained Structures in Heart of Milky Way - SciTechDaily",
      "description": "The play of darkness and light in our galaxy’s crowded core is put on display like never before. A bright field of gas sweeps around the edge of a dark, dense cloud where young stars are bursting out to take their place in the universe. They join an estimated…",
      "url": "https://scitechdaily.com/hidden-wonders-webb-space-telescope-detects-unexplained-structures-in-heart-of-milky-way/",
      "urlToImage": "https://scitechdaily.com/images/Milky-Way-Sagittarius-C-Art-Concept.jpg",
      "publishedAt": "2023-11-22T09:27:00Z",
      "content": "BySpace Telescope Science InstituteNovember 22, 2023\r\nNASAs James Webb Space Telescope has captured a detailed image of the Sagittarius C region near the Milky Ways core, revealing a dense star-formi… [+10273 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Minnah Arshad, Christopher Cann",
      "title": "Las Vegas teenagers charged with murder in fatal beating of classmate - USA TODAY",
      "description": "Jonathan Lewis Jr., 17, died days after he was beaten by a group of classmates near the campus of Rancho High School in Las Vegas earlier this month.",
      "url": "https://www.usatoday.com/story/news/nation/2023/11/22/las-vegas-teenagers-murder-high-school-classmate-jonathan-lewis-jr/71673371007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/22/USAT/71673471007-ap-high-school-brawl-vegas.JPG?crop=2999,1687,x0,y117&width=2999&height=1687&format=pjpg&auto=webp",
      "publishedAt": "2023-11-22T06:06:00Z",
      "content": "Four teens were charged with murder in Las Vegas in the fatal beating of their high school classmate that was recorded and shared widely on social media, prosecutors said.\r\nLas Vegas police said mult… [+2935 chars]"
    }
  ]
  constructor() {
    super()
    // console.log("hii  i am constructor of news ")
    // we made this as a object which can be changed with the state
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className='container'>
        <h2 className='mx-5 my-3'>News monkey - Top headlines</h2>
        <div className="row mx-4 my-3">
          {this.state.articles.map((element)=>{console.log(element.description)
            return <div className="col-md-3 mx-4" key={element.url}>
            <NewsItem 
            title={element.title.slice(0,30)} 
            description={element.description.slice(0,50)} 
            imageUrl={element.urlToImage} 
            newsUrl={element.url}/>
          </div>

          })}
          
        </div>
      </div>
    )
  }
}
