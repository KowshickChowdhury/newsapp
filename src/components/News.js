import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  articles = [{
    "source": { "id": null, "name": "Dexerto" },
    "author": "Michael Gwilliam",
    "title": "Overwatch 2 Sept 7 patch notes: Zarya buffs, Orisa nerfs, big support updates, more - Dexerto",
    "description": "The massive mid-season patch for Overwatch 2 S6 has arrived with huge nerfs to Orisa, buffs to Zarya and changes to every support hero.",
    "url": "https://www.dexerto.com/overwatch/overwatch-2-sept-7-patch-notes-zarya-buffs-orisa-nerfs-big-support-updates-more-2282324/",
    "urlToImage": "https://editors.dexerto.com/wp-content/uploads/2023/09/06/overwatch-2-sept-7-patch-orisa-nerfs-zarya-buffs-support.jpg",
    "publishedAt": "2023-09-07T18:03:38Z",
    "content": "The Overwatch 2 S6 mid-season patch has finally gone live on PC, Xbox, PlayStation and Nintendo Switch with a ton of changes to the games cast of heroes.\r\nOverwatch 2 has finally added the Hero Maste… [+10175 chars]"
  },
  {
    "source": { "id": "the-verge", "name": "The Verge" },
    "author": "Emma Roth",
    "title": "Google teaser previews Pixel Watch 2 and both Pixel 8 phones - The Verge",
    "description": "New videos from Google give clear looks at the Pixel 8, Pixel 8 Pro, and Pixel Watch 2, which will be fully revealed at a launch event on October 4th.",
    "url": "https://www.theverge.com/2023/9/7/23863192/google-pixel-8-pro-watch-2",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/fIDI3vu2St6anUocTgKndOUnqq8=/416x192:2507x1583/1200x628/filters:focal(1440x900:1441x901)/cdn.vox-cdn.com/uploads/chorus_asset/file/24903809/google_pixel_8.png",
    "publishedAt": "2023-09-07T17:21:47Z",
    "content": "Google teaser previews Pixel Watch 2 and both Pixel 8 phones\r\nGoogle teaser previews Pixel Watch 2 and both Pixel 8 phones\r\n / No leaks necessary Google posted new videos of the Pixel 8, Pixel 8 Pro,… [+1798 chars]"
  },
  {
    "source": { "id": null, "name": "YouTube" },
    "author": null,
    "title": "Alone in the Dark - Official 'Making the Monsters' Overview Trailer | Black Summer 2023 - IGN",
    "description": "Take a look at this featurette on how the monsters are made in the reimagining of Alone in the Dark. A classic survival horror franchise returns, placing you...",
    "url": "https://www.youtube.com/watch?v=CexehYlE3Yc",
    "urlToImage": "https://i.ytimg.com/vi/CexehYlE3Yc/maxresdefault.jpg",
    "publishedAt": "2023-09-07T17:01:21Z",
    "content": null
  },
  {
    "source": { "id": null, "name": "YouTube" },
    "author": null,
    "title": "Sifu - Official Final Arenas Content Update Launch Trailer - IGN",
    "description": "Sifu has launched the final content update to the hit third-person Kung Fu combat brawler developed by Sloclap. Players can now access more challenges, new l...",
    "url": "https://www.youtube.com/watch?v=s75HKZFk1NY",
    "urlToImage": "https://i.ytimg.com/vi/s75HKZFk1NY/maxresdefault.jpg",
    "publishedAt": "2023-09-07T17:00:34Z",
    "content": null
  },
  {
    "source": { "id": null, "name": "Push Square" },
    "author": "Robert Ramsey",
    "title": "Gargoyles Remastered Swoops to PS4 in October with New Visuals, In-Game Rewind - Push Square",
    "description": "Come on down",
    "url": "https://www.pushsquare.com/news/2023/09/gargoyles-remastered-swoops-to-ps4-in-october-with-new-visuals-in-game-rewind",
    "urlToImage": "https://images.pushsquare.com/43655eee847ce/1280x720.jpg",
    "publishedAt": "2023-09-07T17:00:00Z",
    "content": "Subscribe to Push Square on YouTube\r\nClassic SEGA Genesis action platformer Gargoyles will be reborn for PS4 on the 19th October. The predictably named Gargoyles Remastered will boast a new visual st… [+384 chars]"
  },
  {
    "source": { "id": null, "name": "Kotaku" },
    "author": "Ethan Gach",
    "title": "Starfield's Intricate Object Physics Are Blowing Players' Minds - Kotaku",
    "description": "Bethesda’s open-world space RPG has some ridiculous possibilities",
    "url": "https://kotaku.com/starfield-physics-open-world-rpg-bethesda-xbox-1850813531",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/aa7de78d64b3250ee0e1fea52de251b3.jpg",
    "publishedAt": "2023-09-07T16:24:00Z",
    "content": "Bethesda RPGs are known for their sprawling worlds, varied questlines, and moral choices. But Starfieldis also impressing players with some incredible detail when it comes to the tiny objects littere… [+2924 chars]"
  },
  {
    "source": { "id": null, "name": "YouTube" },
    "author": null,
    "title": "Harry Mack Freestyles The Web's Most Searched Questions | WIRED - WIRED",
    "description": "Freestyle god Harry Mack visits WIRED to answer his most searched questions in a way only he could. Does Harry ever battle rap? Does he have an album? Does E...",
    "url": "https://www.youtube.com/watch?v=LqGjHqkOXF8",
    "urlToImage": "https://i.ytimg.com/vi/LqGjHqkOXF8/maxresdefault.jpg",
    "publishedAt": "2023-09-07T16:00:10Z",
    "content": null
  },
  {
    "source": { "id": null, "name": "Kotaku" },
    "author": "Levi Winslow",
    "title": "Shigeru Miyamoto Reveals Mario Voice Actor Called Him 'Papa' - Kotaku",
    "description": "Charles Martinet also nearly banged his head walking into a Kyoto restaurant because he’s very tall",
    "url": "https://kotaku.com/nintendo-mario-ambassador-charles-martinet-voice-wonder-1850812889",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/3ea43bad317c5a787f51430a1d08e6e9.jpg",
    "publishedAt": "2023-09-07T15:34:25Z",
    "content": "After it was announced that legendary voice actor Charles Martinet would no longer portray Mario in future Nintendo games (starting with October 20's Super Mario Bros. Wonder) but would become a Mari… [+2248 chars]"
  },
  
  {
    "source": { "id": null, "name": "BikeRadar.com" },
    "author": "Luke Marshall",
    "title": "New Trek Slash gains high-pivot suspension so you can push your limits - BikeRadar",
    "description": "Enduro bike also receives geometry changes, mullet wheels and more travel",
    "url": "https://www.bikeradar.com/news/2024-trek-slash/",
    "urlToImage": "https://images.immediate.co.uk/production/volatile/sites/21/2023/09/Trek-Slash-Gen-6-cf9e274.jpg?quality=45&resize=620,413",
    "publishedAt": "2023-09-07T15:00:14Z",
    "content": "Trek has updated the Slash long-travel bike its factory enduro race team competes on, giving it more rear-wheel travel, mixed wheel sizes as standard, and a new high-pivot and chain idler suspension … [+14833 chars]"
  },
  {
    "source": { "id": "the-verge", "name": "The Verge" },
    "author": "Emma Roth",
    "title": "Anthropic's Claude AI chatbot gets a paid plan for heavy users - The Verge",
    "description": "The Google-backed Anthropic has launched a paid version of its AI chatbot, called Claude Pro. The paid tier allows you to send more messages and offers early access to new features.",
    "url": "https://www.theverge.com/2023/9/7/23862848/anthropic-claude-pro-ai-chatbot-paid-plan-google",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/9gWkb04WyvuyOWSpFdc3uW2QhPY=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/20790706/acastro_200730_1777_ai_0001.jpg",
    "publishedAt": "2023-09-07T14:55:27Z",
    "content": "Anthropics Claude AI chatbot gets a paid plan for heavy users\r\nAnthropics Claude AI chatbot gets a paid plan for heavy users\r\n / Claude Pro costs $20 per month in the US or £18 per month in the UK.\r\n… [+1454 chars]"
  },
  {
    "source": { "id": null, "name": "Kotaku" },
    "author": "Ashley Bardhan",
    "title": "Mortal Kombat Brings Nitara Back As Megan Fox - Kotaku",
    "description": "The Deadly Alliance vampire will make a rare series appearance in Mortal Kombat 1",
    "url": "https://kotaku.com/nitara-megan-fox-trailer-mortal-kombat-1-release-date-1850812647",
    "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/343c3c270eb5165fb20f53aa8bae5408.jpg",
    "publishedAt": "2023-09-07T14:46:00Z",
    "content": "Mortal Kombat publisher Warner Bros. Games has announced that vampire warrior Nitara, who debuted in 2002s Mortal Kombat: Deadly Alliance and was rarely seen again, will return to the series in forth… [+2182 chars]"
  },
  {
    "source": { "id": null, "name": "GamesIndustry.biz" },
    "author": "Christopher Dring",
    "title": "ReedPop and ESA part ways over E3 - GamesIndustry.biz",
    "description": "PAX organiser ReedPop will not be working on future E3 events, the company and the ESA have announced. The ESA has also…",
    "url": "https://www.gamesindustry.biz/reedpop-and-esa-part-ways-over-e3",
    "urlToImage": "https://assetsio.reedpopcdn.com/Screenshot-2023-09-06-165645.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "publishedAt": "2023-09-07T14:00:00Z",
    "content": "PAX organiser ReedPop will not be working on future E3 events, the company and the ESA have announced.\r\nThe ESA has also informed the Los Angeles Convention Center, which is the traditional home of E… [+1526 chars]"
  },
  {
    "source": { "id": null, "name": "Eurogamer.net" },
    "author": "Oliver Mackenzie",
    "title": "Baldur's Gate 3 on PS5 is effectively the PC version at ultra settings - Eurogamer.net",
    "description": "Baldur's Gate 3 is one of the most highly acclaimed games of the year, marrying the best of video games with the comple…",
    "url": "https://www.eurogamer.net/digitalfoundry-2023-baldurs-gate-3-on-ps5-is-effectively-the-pc-version-at-ultra-settings",
    "urlToImage": "https://assetsio.reedpopcdn.com/BG3-SITE_9hsCEDv.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "publishedAt": "2023-09-07T14:00:00Z",
    "content": "Baldur's Gate 3 is one of the most highly acclaimed games of the year, marrying the best of video games with the complexity and nuance of a Dungeons and Dragons campaign. It's unashamedly a PC-centri… [+11243 chars]"
  },
  {
    "source": { "id": null, "name": "HYPEBEAST" },
    "author": "Felix Young",
    "title": "Polaroid Launches New I-2 Instant Camera - HYPEBEAST",
    "description": "More than a point and shoot, the I-2 has built-in manual controls for full creative freedom.",
    "url": "https://hypebeast.com/2023/9/polaroid-launches-new-polaroid-i-2-instant-camera",
    "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F09%2Fpolaroid-launches-new-polaroid-i-2-instant-camera-tw.jpg?w=960&cbr=1&q=90&fit=max",
    "publishedAt": "2023-09-07T13:37:30Z",
    "content": "Polaroid has just launched the I-2, its most advanced (and expensive) instant film camera that comes with built-in manual controls to offer its users full creative freedom. The I-2 marks a first for … [+2217 chars]"
  },
  {
    "source": { "id": null, "name": "Forbes" },
    "author": "Gordon Kelly",
    "title": "Apple Leak Details All-New iPhone 15, iPhone 15 Pro Price Changes - Forbes",
    "description": "Apple's new iPhone 15 range will be the most expensive iPhones ever, and now we know why...",
    "url": "https://www.forbes.com/sites/gordonkelly/2023/09/07/apple-iphone-15-pro-max-price-increase-new-iphone-upgrade-cost/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64e74ad803781abed13b0612/0x0.jpg?format=jpg&crop=1051,592,x202,y4,safe&width=1200",
    "publishedAt": "2023-09-07T13:35:45Z",
    "content": "Apple iPhone 15 Pro Max render based on multiple design leaks\r\n@graphicalryan, MacRumors\r\nApples iPhone 15 Pro and iPhone 15 Pro Max are getting more expensive, and now we may know exactly why.\r\nAcco… [+3087 chars]"
  },
  {
    "source": { "id": null, "name": "Notebookcheck.net" },
    "author": "Daniel R Deakin",
    "title": "Nintendo Switch 2 with DLSS chasing PS5 standard as tech demo allegedly wows devs at Gamescom - Notebookcheck.net",
    "description": "Rumors of the Nintendo Switch 2, or at least its performance potential, having been revealed at a recent trade event have been corroborated in two separate reports. Allegedly, some devs had the opportunity to witness a Switch 2 tech demo, with the hardware ut…",
    "url": "https://www.notebookcheck.net/Nintendo-Switch-2-with-DLSS-chasing-PS5-standard-as-tech-demo-allegedly-wows-devs-at-Gamescom.747630.0.html",
    "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/nintendo-switch-2-ps5-dlss-nvidia-drdNBC.jpg",
    "publishedAt": "2023-09-07T13:33:27Z",
    "content": "It appears that a number of Nintendo Switch 2 leaks and rumors as of late have come together into one believable situation: That some sort of hardware was revealed to developers at Gamescom with the … [+2275 chars]"
  },
  {
    "source": { "id": "ign", "name": "IGN" },
    "author": "Ryan Dinsdale",
    "title": "Iconic Voice Actor From Oblivion, Fallout 3, and Other Bethesda Games Returns in Starfield - IGN",
    "description": "The voice behind a ton of iconic Bethesda characters from The Elder Scrolls 4: Oblivion to Fallout 3 has made a return in Starfield.",
    "url": "https://www.ign.com/articles/iconic-voice-actor-from-oblivion-fallout-3-and-other-bethesda-games-returns-in-starfield",
    "urlToImage": "https://assets-prd.ignimgs.com/2023/09/07/star-1694090389912.jpg?width=1280",
    "publishedAt": "2023-09-07T13:00:43Z",
    "content": "The voice behind a ton of iconic Bethesda characters from The Elder Scrolls 4: Oblivion to Fallout 3 has made a return in Starfield.\r\nAs reported by PC Gamer, Wes Johnson appears in Starfield as Ron … [+1736 chars]"
  },
  {
    "source": { "id": null, "name": "XDA Developers" },
    "author": "Arif Bacchus",
    "title": "Google gives Chrome a beautiful Material You redesign for its 15th birthday - XDA Developers",
    "description": "Google Chrome is turning 15 today and the browser is getting a new look and new features for its big day",
    "url": "https://www.xda-developers.com/chrome-15th-birthday-material-you-redesign/",
    "urlToImage": "https://static1.xdaimages.com/wordpress/wp-content/uploads/2023/09/chrome_15th-birthday_blog-header_2880x1200_-v2_1.png",
    "publishedAt": "2023-09-07T13:00:00Z",
    "content": "Key Takeaways\r\n<ul><li> Google Chrome is getting a new look inspired by the Material You design language, featuring fresh color palettes and improved legibility of icons. </li><li> The Chrome Web Sto… [+2506 chars]"
  }];
  constructor(){
    console.log('I am a constractor of a News component');
    super();
    this.state ={
      articles : this.articles,
      loading : false
    }
  }

  async componentDidMount(){
    console.log ("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2066ccf18ce14fb7be874975bf978074";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  

  render() {
    // console.log("render");
    return (
      <div className='container my-3'>
        <h1 style={{textAlign : "center"}}>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title.slice(0, 43)} description={element.description.slice(0, 64)} imageUrl={element.urlToImage} newsUrl={element.url} />
                  </div>
          })}
        </div>
      </div>
    )
  }
}

export default News