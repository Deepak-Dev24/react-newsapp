import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    render() {
        let articles = [
            {
                "source": {
                    "id": null,
                    "name": "BBC News"
                },
                "author": null,
                "title": "Venezuela frees six US men after Trump envoy meets Maduro - BBC.com",
                "description": "The move follows talks in Caracas between the Venezuelan leader and Trump official Richard Grenell.",
                "url": "https://www.bbc.com/news/articles/cjw4yejwlpeo",
                "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/c55a/live/2ed97ec0-e03c-11ef-a819-277e390a7a08.jpg",
                "publishedAt": "2025-02-01T04:49:40Z",
                "content": "Venezuela has freed six US detainees after talks in Caracas between President Nicolás Maduro and a senior Trump administration official.\r\nThe release of the men was announced on social media by Donal… [+1590 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "Dejounte Murray tears Achilles tendon, per report, as Pelicans' injury-ravaged season goes from bad to worse - CBS Sports",
                "description": "Murray will miss the remainder of this season and likely a decent chunk of next year",
                "url": "https://www.cbssports.com/nba/news/dejounte-murray-tears-achilles-tendon-per-report-as-pelicans-injury-ravaged-season-goes-from-bad-to-worse/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/02/01/bdaa4cfa-382f-42d0-b6a2-eae11204eac7/thumbnail/1200x675/c68e13eaa8dbde5d3479f428007a1622/013125-dejountemurray.jpg",
                "publishedAt": "2025-02-01T04:21:00Z",
                "content": "One of the most injury-plagued seasons in recent NBA memory continued for the New Orleans Pelicans on Friday night, and this one is the most significant as Dejounte Murray will miss the remainder of … [+850 chars]"
            },
            {
                "source": {
                    "id": "business-insider",
                    "name": "Business Insider"
                },
                "author": "Pranav Dixit, Hasan Chowdhury",
                "title": "Sam Altman says OpenAI will embrace two new AI approaches, one from DeepSeek and another from Meta - Business Insider",
                "description": "During a Reddit AMA on Friday, Altman said OpenAI has \"been on the wrong side of history\" when it comes to keeping model weights confidential.",
                "url": "https://www.businessinsider.com/sam-altman-openai-ai-approaches-deepseek-meta-open-source-2025-1",
                "urlToImage": "https://i.insider.com/679d840ceb4be2fff9a32e95?width=1200&format=jpeg",
                "publishedAt": "2025-02-01T02:41:00Z",
                "content": "When rivals take a different approach and succeed, it sometimes pays to change course. \r\nThis is what Sam Altman said OpenAI will do, according to a Reddit AMA session on Friday. \r\nThe discussion tou… [+2257 chars]"
            },
            {
                "source": {
                    "id": "axios",
                    "name": "Axios"
                },
                "author": "April Rubin",
                "title": "HIV, transgender care, climate change and other federal websites go dark - Axios",
                "description": "Several CDC pages were taken down by Friday afternoon. Some redirected users to other sections of the site.",
                "url": "https://www.axios.com/2025/01/31/health-cdc-websites-data-removed-trump",
                "urlToImage": "https://images.axios.com/HtvsatvPTacRa-YVWPP2c5kdsO8=/0x0:1344x756/1366x768/2025/01/31/1738361384681.png",
                "publishedAt": "2025-02-01T02:40:44Z",
                "content": "Several federal websites tracking climate science andhealth care issues like HIV prevention and transgender care were down as of Friday afternoon. \r\nWhy it matters: The sites included topics like con… [+3751 chars]"
            },
            {
                "source": {
                    "id": "politico",
                    "name": "Politico"
                },
                "author": "Camille von Kaenel, Annie Snider",
                "title": "Trump says he opened California’s water. Local officials say he nearly flooded them. - POLITICO",
                "description": "The Army Corps of Engineers moved to release massive quantities of water in Central California, panicking local officials.",
                "url": "https://www.politico.com/news/2025/01/31/trump-california-water-00201909",
                "urlToImage": "https://static.politico.com/4d/9b/ef7585554483b3609512e239d370/california-storms-00850.jpg",
                "publishedAt": "2025-02-01T02:34:24Z",
                "content": "Before the Corps ratcheted down its plan, local authorities scrambled to move equipment and warn farms about possible flooding, said Victor Hernandez, who oversees water management on one of the rive… [+6501 chars]"
            },
            {
                "source": {
                    "id": "usa-today",
                    "name": "USA Today"
                },
                "author": "Amaris Encinas",
                "title": "Kohl's cuts 10% of corporate workforce weeks after announcing 27 store closures - USA TODAY",
                "description": "The move comes weeks after the struggling retailer announced it would be closing 27 \"underperforming\" stores in 15 states by April.",
                "url": "https://www.usatoday.com/story/money/2025/01/31/kohls-corporate-layoffs/78100790007/",
                "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/01/10/USAT/77602095007-getty-images-1470587049.jpg?crop=4764,2680,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
                "publishedAt": "2025-02-01T02:17:55Z",
                "content": "Kohl's has slashed about 10% of its corporate workforce.\r\nThe move comes weeks after the struggling retailer announced it would be closing 27 \"underperforming\" stores in 15 states by April. That leav… [+2855 chars]"
            },
            {
                "source": {
                    "id": "associated-press",
                    "name": "Associated Press"
                },
                "author": "ERIC TUCKER, ALANNA DURKIN RICHER",
                "title": "Trump administration fires prosecutors involved in Jan. 6 cases and moves toward ousting FBI agents - The Associated Press",
                "description": "The Trump administration has fired a group of prosecutors involved in the Jan. 6 criminal cases and demanded the names of FBI agents involved in those same probes so that they can possibly be ousted. The moves that reflect a White House determination to exert…",
                "url": "https://apnews.com/article/trump-fbi-firing-a7b19a5f414ce82c6f6b5f6656000d23",
                "urlToImage": "https://dims.apnews.com/dims4/default/75f0bb3/2147483647/strip/true/crop/5777x3250+0+301/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F39%2F7b%2Ff17837024f314d7f87e3d9f43214%2F7512c874e72e4e7683c9e1f56ab01033",
                "publishedAt": "2025-02-01T01:47:00Z",
                "content": "WASHINGTON (AP) The Trump administration on Friday fired a group of prosecutors involved in the Jan. 6 criminal cases and demanded the names of FBI agents involved in those same probes so they can po… [+5992 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Variety"
                },
                "author": "J. Kim Murphy",
                "title": "Trump White House Takes Aim at Selena Gomez in New Video Responding to Her Crying About Deportations - Variety",
                "description": "In a new video shared by the White House, the Trump administration responded to Selena Gomez crying about mass deportations.",
                "url": "https://variety.com/2025/tv/news/white-house-blasts-selena-gomez-crying-deportations-1236293484/",
                "urlToImage": "https://variety.com/wp-content/uploads/2025/01/selena-gomez-white-house.jpg?w=1000&h=563&crop=1",
                "publishedAt": "2025-02-01T01:31:00Z",
                "content": "In a new video produced by the White House, the Trump administration blasted Selena Gomez for posting an Instagram video in which she filmed herself crying over deportations of undocumented immigrant… [+2383 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "MarketWatch"
                },
                "author": "Christine Idzelis",
                "title": "Tech stocks have worst week in months after ‘nobody saw DeepSeek coming’ amid AI mania - MarketWatch",
                "description": "‘Disrupters get disrupted shockingly fast,’ warns Rob Arnott, founder of Research Affiliates",
                "url": "https://www.marketwatch.com/story/tech-stocks-see-worst-week-in-months-after-nobody-saw-deepseek-coming-amid-ai-mania-4de0101c",
                "urlToImage": "https://images.mktw.net/im-48393816/social",
                "publishedAt": "2025-02-01T01:12:00Z",
                "content": "The S&amp;P 500s technology sector just ended its worst week since early September, after Chinese artificial-intelligence company DeepSeek seemed to startle investors perception of winners and losers… [+388 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Dallas Morning News"
                },
                "author": "Calvin  Watkins",
                "title": "Cowboys’ hiring of OC Klayton Adams makes one thing clear about future of Dallas’ offense - The Dallas Morning News",
                "description": "Klayton Adams’ time as the Cardinals’ offensive line coach saw Arizona finish in the top 10 in the NFL in rushing.",
                "url": "https://www.dallasnews.com/sports/cowboys/2025/01/31/dallas-cowboys-offensive-coordinator-klayton-adams-brian-schottenheimer/",
                "urlToImage": "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/v2/2LSYTLRSKKEPZ77CMVQF64VBIU.jpg?auth=c37f325176e118bdf282bcaf0da3a07b90d238d4a55426ead132355fe766ea8b&height=630&width=1200&smart=true&quality=80",
                "publishedAt": "2025-02-01T00:48:38Z",
                "content": "The Cowboys hiring Klayton Adams as their offensive coordinator on Friday didnt generate the negative backlash that Brian Schottenheimer did a week ago, and for good reason.\r\nWhile Schottenheimer has… [+4065 chars]"
            },
            {
                "source": {
                    "id": "the-washington-post",
                    "name": "The Washington Post"
                },
                "author": "Anthony Faiola, Kate Brady",
                "title": "German politicians signal to Syrian asylum-seekers: It’s time to go home - The Washington Post",
                "description": "Leading politicians in Germany are calling for mass returns, echoing President Donald Trump’s plan to expel undocumented migrants from the United States.",
                "url": "https://www.washingtonpost.com/world/2025/01/31/germany-migration-deportations-syrians/",
                "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RO4LQ32ZIPNNML477APMVWMGRI_size-normalized.jpg&w=1440",
                "publishedAt": "2025-02-01T00:43:44Z",
                "content": "BERLIN A sharp turn toward a tougher line on migrants is beginning to play out in Germany, with leading politicians calling for mass returns, echoing President Donald Trumps plan to expel undocumente… [+9454 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "College basketball picks, schedule: Predictions for Tennessee vs. Florida and more Top 25 games for Saturday - CBS Sports",
                "description": "Our experts have picks for all of Saturday's big games including the Gators-Volunteers showdown in the SEC",
                "url": "https://www.cbssports.com/college-basketball/news/college-basketball-picks-schedule-predictions-for-tennessee-vs-florida-and-more-top-25-games-for-saturday/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2025/02/01/951a4044-8dcf-4cc9-850e-b4ddc725bc76/thumbnail/1200x675/9cd0f9ff3905b400836a7f87514dac57/usatsi-25185159-1.jpg",
                "publishedAt": "2025-02-01T00:28:00Z",
                "content": "Twenty-one teams currently ranked in The Associated Press Top 25 poll will be on the court Saturday for a loaded college basketball schedule as the calendar turns to February. The action begins when … [+3890 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Financial Times"
                },
                "author": "Stefania Palma, Demetri Sevastopulo, Claire Jones",
                "title": "Former Federal Reserve official accused of passing secrets to China - Financial Times",
                "description": "Justice department alleges John Rogers accessed sensitive information including briefings and policy deliberations",
                "url": "https://www.ft.com/content/1cf013ed-5e49-4925-acd4-3041eab6b028",
                "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3ef16b57-c97b-4196-b427-9cdf0ccf112d.jpg?source=next-barrier-page",
                "publishedAt": "2025-02-01T00:15:15Z",
                "content": "FT newspaper delivered Monday-Saturday, plus FT Digital Edition delivered to your device Monday-Saturday.\r\n<ul><li></li>Weekday Print Edition<li></li>FT Weekend<li></li>FT Digital Edition<li>Global n… [+105 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Aditi Srivastava",
                "title": "Emily in Paris star Lily Collins welcomes first baby with Charlie McDowell - Hindustan Times",
                "description": "Lily Collins and Charlie McDowell welcome baby girl Tove Jane McDowell, marking a new chapter in parenthood. | Hollywood",
                "url": "https://www.hindustantimes.com/entertainment/hollywood/emily-in-paris-star-lily-collins-welcomes-first-baby-with-charlie-mcdowell-101738366560283.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2025/01/31/1600x900/lily-collins-recalls-belitted-called-6330594_1738367676939_1738367690325.webp",
                "publishedAt": "2025-02-01T00:00:12Z",
                "content": "Lily Collins and Charlie McDowell have officially entered a new chapterparenthood! The actress, 35, and the filmmaker, 41, shared the exciting news on social media, giving fans a glimpse of their gro… [+2239 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Rolling Stone"
                },
                "author": "Tomás Mier",
                "title": "Zoe Saldaña Doesn’t ‘Support’ Karla Sofia Gascón’s Offensive Tweets: ‘It Saddens Me’ - Rolling Stone",
                "description": "Zoe Saldaña said she does 'not have any tolerance' for hate speech against any group after Karla Sofia Gascón's racist posts resurfaced.",
                "url": "http://www.rollingstone.com/tv-movies/tv-movie-news/zoe-saldana-responds-karla-sofia-gascon-tweets-1235253449/",
                "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2025/01/GettyImages-2192588752-1-1.jpg?w=1600&h=900&crop=1",
                "publishedAt": "2025-01-31T23:49:39Z",
                "content": "Zoe Saldaña is making it clear that she does “not support” her Emilia Pérez co-star Karla Sofía Gascón‘s recently surfaced offensive and problematic past social media posts. During a Q&amp;A in Londo… [+2630 chars]"
            },
            {
                "source": {
                    "id": "bloomberg",
                    "name": "Bloomberg"
                },
                "author": "Bloomberg",
                "title": "Rubio Brings a Tough Message From Trump on Trip to Latin America - Bloomberg",
                "description": null,
                "url": "https://www.bloomberg.com/news/articles/2025-01-31/rubio-brings-a-tough-message-from-trump-on-trip-to-latin-america",
                "urlToImage": null,
                "publishedAt": "2025-01-31T23:17:24Z",
                "content": null
            },
            {
                "source": {
                    "id": "ars-technica",
                    "name": "Ars Technica"
                },
                "author": "Beth Mole",
                "title": "FDA approves first non-opioid pain medicine in more than 20 years - Ars Technica",
                "description": "The drug, Journavx (suzetrigine), inhibits an ion channel in peripheral nerves.",
                "url": "https://arstechnica.com/health/2025/01/fda-approves-first-non-opioid-pain-medicine-in-more-than-20-years/",
                "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2025/01/Bottle_Tablet_HeadOn_Standing_VX50_visible_New_Packaging-1152x648.jpg",
                "publishedAt": "2025-01-31T23:03:40Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Forbes"
                },
                "author": "Monica Mercuri",
                "title": "How To Watch The 2025 Grammy Awards — Cable, Streaming And Free Options - Forbes",
                "description": "The biggest night in music is just days away. Find out how to watch the 67th Annual Grammy Awards, including cable, streaming, and even free options.",
                "url": "https://www.forbes.com/sites/monicamercuri/2025/01/31/how-to-watch-the-2025-grammy-awards---cable-streaming-and-free-options/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/679d52ad99deb5d57825d4e5/0x0.jpg?format=jpg&crop=2253,1502,x0,y114,safe&height=900&width=1600&fit=bounds",
                "publishedAt": "2025-01-31T23:02:13Z",
                "content": "LOS ANGELES, CALIFORNIA - FEBRUARY 04: Beyoncé supports Jay-Z as he accepts the Dr. Dre Global ... [+] Impact Award during the 66th GRAMMY Awards at Crypto.com Arena on February 04, 2024 in Los Angel… [+4209 chars]"
            }
        ];

        return (
            <div className='container my-5 '>
                <h1 className='text-center'>NewsKnowledge - Top Headlines</h1>
                <div class="row justify-content-center align-items-center my-5 g-2">
                    <div className='col-md-4'>
                        <NewsItem title="mytitle" description="mydescription" ImageUrl="https://sportshub.cbsistatic.com/i/r/2025/02/01/951a4044-8dcf-4cc9-850e-b4ddc725bc76/thumbnail/1200x675/9cd0f9ff3905b400836a7f87514dac57/usatsi-25185159-1.jpg" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="mytitle" description="mydescription" />
                    </div>
                    <div className='col-md-4'>
                        <NewsItem title="mytitle" description="mydescription" />
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
