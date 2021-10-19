(function () {
  'use strict';

  var data = [
    'This time of year the building faces east, so it is sunnier and warmer. (explaining summertime)',
    'The lady from Xerox called and wants to meet about leasing a printer.(Finally closing out an outrageous lease, only to sign another.)',
    'After a somewhat extensive asset search, five laptops are completely missing.',
    'I am vehemently opposed to smoking, but this is great. (said immediately before lighting up and smoking an electronic cigarette)',
    "She said she lost it in the carpet.  Aren't we lucky that she found it?",
    "It's due tomorrow. I haven't seen it yet, & he said he'll do it next week. I hope to start it by the end of today. (TN Insert that had no purpose)",
    "Well, you just can't count all the Sparrows",
    'Someone came in, said something about his van breaking down, and he came in asking to use a phone. And he was kind of looking around. So I asked him to wait outside, and I called the police. Then, he was right mad.  And he was looking around again.',
    'Being asked to take photos, and never being asked for the photos.',
    "Taking 10 minutes to ask me to call Jmoney for her to ask a simple question, because she doesn't have time to do so herself.",
    "Ben doesn't have time to do work. I need him for work at the TN.  (Manager tells everyone in the organization: rarely giving me actual work, and saying that we need time to plan and strategize)",
    'I saw your car in the parking lot, so I thought you had left.',
    "I don't like circles. (criticizing a logo for being circular, working for an organization that has a circular logo)",
    'We need to contribute articles for the TN so that the staff there can have time for strategic envisioning.',
    "Rick's domain name purchase wasn't allowed, and he had to transfer ownership to Ottawa before his purchase could be at least approved.",
    "Clip art santa claus covering the stad schedule, all while Jmoney insists that people aren't making their own posters because the BIG says not to",
    'Newspapers fall under Community Recreation.',
    'Navy 10k celebrates its 26th annual event in its 27th year....?',
    'Went through labourous effort to design an Employee Orientation Guide, only to have it completely changed, and for it to be given to no one except for me, who had been an employee for two years, and who helped make the guide.',
    'Base Commander visits cat shack, immediately beside base newspaper building, but, in 2 years, never visits base newspaper.',
    "The Health Challenge being a calendar with a list of things to do on it.  And that's it.  No further guidance.  No idea how to enter the challenge or submit the results.  Just a huge list and a tiny calendar.  People freak out.",
    'Newspaper survey asked respondents to signify whether they read the news on the "online internet".',
    'Fall Fest was a dream that an ex-manager had, and a reality that few people witnessed. (empty hangar is one of the worst places to hold a concert) - "Fall.. Fall hard.. Fall quickly.. Fall into Fall Fest"',
    "Jmoney asked me where I got the purpose for the navy 10k in my fact sheet.  I said I made it up, asked her if she had anything better.  Hilarious to me that it's in its 26th year and still without a purpose.  Of course it wasn't approved.",
    "Paying for a digital advertisement suite, complete with servers, screens, and software, knowing full well that you signed a five-year no-escape-clause contract with the people you're trying to replace (just to get a promotion(?), and it works(!?)).",
    'Budgetting thousands for digital screens which never actually happened.  She says she budgetted 0, which is "worst case".  I reply "that\'s not worst case: that\'s exactly the case."',
    "You made a huge mess in the microwave. What are you eating? Soy? I think it's soy. It was definitely today. (it was caked on)",
    'On a supposedly locked down and monitored internet connection, staff torrent music daily.',
    'Someone came in accidentally. V says its a good thing because now more people will know about us.',
    "J, good news: you can go to manager's meetings. I talked with them, and they said it would be good for you to come. Right, however, Ben: I'm sorry. You're a Cat 2. You can't go. (didn't want to, wasn't Cat 2, 1st time hearing of Cats)",
    "Here's a photo of a sign.  I don't think it will help, but wasn't sure.  (This end of day before the weekend on a project that he had no specifications for)",
    'Just kidding... but... kidding on the kidding.',
    "Doing something the same way every time and expecting a different result is the definition of insanity. / Yes. It is. / So, you doing this, over and over again is insane. / Yes.  You're right.  They are making me insane.",
    "applies for project manager course only to be denied because they don't want him to be a project manager.",
    'Letting us go home a full five minutes early.  One time, letting us go five minutes after working hours, saying "I meant to tell you sooner, but you can go early today."',
    'Gammon (Oh My God the illustration?? "Gammon, flew in through my window, I said how you doin\'? He said -- (I can\'t remember??)"',
    'Takes it upon herself to schedule an insert in the herald before having any content whatsoever to promote.  Basically, designing a marketing strategy before having anything to market.',
    'Not being allowed to bill for 6 months because of an unapproved price list; during this time CSD charged an entity twice as much as we ever would have.',
    'Calling it the Cold War reenactment when she deliberately attempted to freeze us in the office during the winter.',
    'Manager of an entity that has $1M debt: promoted. Creates a brand-new event that reaps a $780K net loss, and several employees are laid off as a result: promoted again.',
    "Second in command hadn't visited the most important gym, which she was in charge of, and which also was directly beside the building she worked in.",
    'N6 sends out email saying "please do not email us or call us, we are too busy."  Later an N6 employee puts our request on the desk of an employee who no longer works there.',
    'She meets with her supervisor to ask permission not to do a simple task.  We keep our files and copies of our issues, and refuse everyone who asks for them. Would take 20 minutes. She has a 30 min meeting.',
    'I think they are caught up in panic. / Why are they panicking? / Well, no. We shouldn\'t say that they\'re panicking, you guys. We really have to stop saying that (Correcting herself by blaming us? Or is does she refer to herself as "We"?).',
    'Bonin trying to keep us out of seeing the Blue Jays, as if he were running the show, and as if any media showed up while the prime minister was across the street.',
    "After a depressing meeting bickering over irrelevant details in masthead designs, J is interrupted with people singing happy birthday, and his manager bringing in a cake that he said he couldn't eat.  He then offered the cake to everyone.",
    'Painter takes a full month to paint a single room. Thus begins the board room days.',
    'J and I doing the hiring for HR at literally the last minute, while we were busy with our on-paper jobs.',
    'After another coworker buys us all pizza, she says "We are lucky sons of bitches."',
    'Embarrassing J in meetings by saying that they were late because he wanted coffee; then proceeding to interrupt him during topics of his expertise.',
    'You guys never go back there right? / Nope. / Oh, so I can get in there anytime... (cleaner, under his breath, from the hallway, fired a few weeks later)',
    'Wally let the tn.ca domain name expire and TN emails and website went down.',
    "Workforce is launched nationwide before testing. (fails miserably and immediately: a new online HR form processor designed to make us do HR's work, all while we continue to pay fees for HR)",
    'Taking yoga shots.',
    "Printing emails (...?) and posting those emails on a bulletin board (why does a staff of three need a bulletin board?) (why can't she just forward emails?)",
    'Manager meetings: Managers need not apply. (Managers were not entitled to attend manager meetings...?)',
    'Giving promotional (complete garbage) bags out, refusing to give some to children, claiming, "I\'m pretty sure I remember you; I gave you one... maybe your sister.  Go ask her." Then having hundreds left over as a result of stinginess.',
    'You have to send them as RGB. / Really? / No no no no no no no... CMYK.',
    "What are we going to do if there's a bus strike. / Lock the door.",
    'Before I left, she asked "Aren\'t you forgetting the toaster oven?"  I say, "I was going to leave it."  She responds, "No, we can\'t keep it.  Could you take that out of here?"',
    "National manager is unable to handle his job, so he promotes our manager to co-manage: first task is to dress up as a large breasted woman and sexually harass all of the organization's top-level directors and managers as Ivana Take-My-Clothes-Off.",
    "She asks her boss's permission not to do work because Gammon asked her for PDFs or images of the TN. He then complains and we end up being tasked to work for him for free. His booklet is a fraud and is only designed to get his boss a promotion.",
    "I wouldn't know her from a sack of sand.",
    'They are taking 1 and a 1/4 pages of a 4 page insert, but they are only allowed to take 1/3 of the whole thing. (confused about math in the insert that she had little right and no purpose in creating)',
    'Keep your head up, Connor.',
    'Email saying that the TN website is "embarrassing to the Navy to say the least."',
    "IT told me that we can't get analytics for Internet Explorer. / But I sent you analytics for Internet Explorer. / I know; that's why I don't know what to believe. (national website manager)",
    'I want to force feed her cake. (after people were being stupid)',
    'Dunfield Dunfield.  Ridiculous interviews with sports athletes on steroids.',
    'having meetings, never taking notes ourselves, all the while everyone else takes notes, and never follows up on their tasks from the previous meeting.',
    'I think I should apologize to Stephen.  I was quite mean last night.  (after yelling at J)',
    'Entities constantly making posters without consulting graphic designers',
    "These fierce lady midgets just can't stay. (Lady midget wrestling ad in the TN from a military group that is under our overall division, but didn't think to ask us for graphic design)",
    'Refusing to invite Snap to cover our event because "Snap is not our target market."',
    "Good news! Just talked with a printer salesman, and he thinks we can get a new lease on a printer for $300/month! / For how many years? / Five. / (gets calculator out: 300x12x5) That's $18,000. / Ohhkay. / Yeah, that's not a good deal.",
    'We received a cheque for a negative amount of money, so you need to send more invoices. (from our accounting department)',
    'Frank announces huge changes, saying that all of our products are sold to the local paper. Then says "If you have any questions, send me an email, because I gotta go."',
    "J's threatening to quit. (Manager tells boss multiple times as a persuasion method)",
    "Receiving a safe before Christmas. (Letter from Pete asking if I have a safe, if not he will send; and he did. No combination, no purpose, no idea where it came from, no idea where it went, or if we'll ever see it again)",
    'sending me an email asking if I could "please do this article" without any indication as to what article she\'s referring.',
    "I'll give you the number to [another ad company] and they should be able to take care of you. (Sending customers away from our office, later thanking J for 'volunteering')",
    'Sell the name of the organization.  Good.  Wait.  We have money now?  Buy it back. (TN goes into needless debt.  Meanwhile, TN as a business name is rampant)',
    "We end up doing free work for Gammon for his boss's promotion-inspiring booklet.  We proceed to take photos of flowerbeds.",
    'freaking out over an ad that had the TN logo in it, even though it was a draft and was never going to be published.',
    'We decide to offer web design, and solicit to the museum (meeting with tomb raider).  We have two meetings, and create drafts, and they find out that they are not allowed to spend the $8K that they earmarked for the redesign.',
    'Neil ripping on V saying that she requested a tiny sports banner.',
    "Director finds out that one of her staff is being moved a week in advance while she's on vacation. No surprise, she is a little pissed off.  Also no surprise, the move is delayed.",
    'V constantly sending blank emails to herself.',
    "Calls me out for not being prepared for the minister joining the race, as if it matters, at all, and as if I'm psychic, and as if I'm paid well at all, and as if I wasn't completely overworked, even though I actually was very, very well prepared.",
    'We were told that we had to complete training and development courses by the end of the year.  The courses would have taken up 40 work days.  Some actually completed it.  After the first year, the program was discontinued.',
    "I tell her I'm leaving to cover the event she asked me to cover.  She calls me 10 minutes later, while I'm at the event, during the playing of O Canada, to ask if I'm at the event or not...?  Also note that I had Smack That as my ringtone.",
    '"Dance Style Tickets" on a mathematically-loose price sheet is completely backed by superiors, whereas a year-long, calculated, price sheet based on expenses and revenues is ridiculed and tossed.',
    'J pitches for a pay-as-you-go $100 stock image package. It was denied. SP pitches for a 25-per-day $1800 stock image package. Approved.',
    'Playing guitar at work.  Having Blair come play and Frank as well.',
    "Sends me to cover an event on a tall ship at 6am, all the while I have a lot of work to do.  I get back at noon, and she says she doesn't need the tall ship story at all (ever).",
    'This, to me, is Vitali-T first draft. (using that as an insult)',
    "You don't have a marketing plan. I feel like this is happening too fast.  You're putting the cart before the horse. (After three weeks of in-meeting plans and work spent towards rebranding and advertisements)",
    'I wanted to ask you guys, what do you think we should buy? / Do you have a brochure for promotional items? / Yes, I do. / Hmmm... Perhaps you could find something in that...? (One of the last communications meetings we ever had)',
    'Mocking printer colors: advil yellow, intersexual beige, "does it come with godzilla green?"',
    "Why are there several different fonts in the paper? / What do you mean? / There's a different font for each story? Is that good practice? / Oh, we've always done that. (No, we haven't)",
    "I think the reason the logos aren't showing up, and this has happened before, is that some logos are protected so that they can't be displayed in JPG format. (manager of our web site program)",
    'Throwing out my mayonnaise after I asked her not to.',
    'Calls me "my Benjamin" because I don\'t have a proper title?',
    "I suggest a concept of an iPad in ad for an iPad contest. J-money suggests we put iPads on the iPad (several, in fact) after many drafts.  I change the ad completely. She says we shouldn't have a hockey photo because it's not in the survey.",
    "Yells at J for asking repeatedly for sufficient and timely information in order to do his job.  He receives what he needs to do the project a day before it's due.  Also, he receives a 1-inch by 1-inch photo for the feature.",
    "She said that the ad didn't run in March, so I will have to call to complain. / Here it is: page 8. / Oh, well. That's good. (later telling her that she still didn't see the ad, even when given the page number)",
    "After months of stressing over the importance of the new masthead, she completely neglects sending it to the herald.  I catch it while editing, ask J, and he confronts her so he doesn't get fired.  I laugh.",
    'Bilingual Translation Department gives us a line that says "Joyeuses Fetes a tous a toutes", and we pay to print it in our Nova Scotian newspaper. http://french.stackexchange.com/questions/1628/joyeuses-fetes-a-tous-a-toutes-is-this-accurate-french',
    "HR hires someone to send out needless reminders and newsletters.  I ask her to stop emailing me.  She says she can't because someday she might have something important to say(?). I tell her I'm blocking her. She complains to her boss who tells mine.",
    "Good news: our financials came in, and TN is looking really good.  We're $12,000 ahead of what was projected. (after we had the worst year yet for projects, and stopped billing for the projects we had)",
    'National paying contractors to create a sunrise/silhouette poster, all while J recreates it in 15 minutes (so, they paid a lump sum for a contractor, and wages for a staffer to do the same project).',
    'Suggesting that Graphic Design should be managed by IT Support.',
    'J drinks 8 cups of coffee and goes on insane rant about QR codes, mostly because he had nothing better to do.',
    "They are required to do redesign the banners for us because it is in the contract. / I don't remember seeing anything in there about graphic design. / Well, it says that they must provide the layout. / Yes, but banner design is not layout.",
    "We can't all be a Jack-of-all-trades; I mean, I do my best. (in reality, a Jack of one trade)",
    'An ad for swimming lessons, she requested a picture of ice skates...',
    "Seeing a change from last year's budget of $18,700 to $18,300 and saying that it is a drastic cut.",
    'Finding a pristine 11x17", black and white copy of a photo of half of a man\'s face, later to be realized as Dave Blanchard, in a folder, in a drawer, likely kept there for as long as a half-decade.',
    "We had someone here who lived in Stewiacke, and when there was a blizzard, he wouldn't come to work. Why should he get special treatment because he lives so far away? (How about living so far away probably isn't so fun, and blizzards can kill you...)",
    'She says "I know this isn\'t the best time," (because he is mad at the lack of thought put into the project that was just thrown at him) "and I shouldn\'t be asking you... but, I just got an email about a powerpoint course.  Would you like to take it?"',
    'Confusing Airfire with Eastlink with N6 with Symon with Sprout. (Manager never remembering who does what)',
    'Our business trip to purchase a microwave.  Took forever.',
    'Live streaming work',
    "J asks for the working document/vector/scalable/pdf for a poster, and he is told, by the project manager, that they don't have one, and weren't given it from the design contractor.  I tell J that I have it.",
    'Constantly quoting wages as unlivable, all the while I was making less.',
    'stress leave',
    'Decorating the office with absurdities: framed pictures of the walls on each wall, Dave Blanchard on the fridge, wolf valour, framed photo of girl and horse, manny the manikin, half of our faces posted on walls, rock fest poster with the penis...',
    'Holds a meeting to tell us the weather.  We ask if she wrote that down.  She flips to her fifth post-it note, and says, "yes, it\'s right here: 20 degrees."',
    'Spend your ant farm budget on the fitness challenge',
    "I'd like to see it... maybe... less... blue. (Redesigning the brand after he specifically said he doesn't want to hear subjective opinion)",
    "In May she asks: Are you taking vacation in the summer? / I don't know. / Okay then, I need you to cover an event in July.",
    "Asking if I'd cover an award ceremony for an award the organization won, a day before it happens...and it never ever happened (postponed constantly)",
    'Can you get that done because I promised it to someone by noon.  (Ridiculous management and professional discourtesy by people who are not directly in a position of authority)',
    'Not giving us gym passes.  (We do advertising, magazines, news articles, photos, branding, documents, website edits, and videos for them, but we were denied gym passes because we "don\'t work for them")',
    'Sponsorship is told a month in advance to get sponsors for a concert that no one wants, and no one had a realistic plan for, and was designed to try to steal people away from another successful event put on by the people we were contracted by...',
    "Why is Mike in our parking lot? / I'm not sure.  Is he? /  Yes. He's just standing around in our parking lot. / Yes. Actually, he has been for 20 min. / What?  Why? / Well, he had last week off so he's probably busy catching up.",
    "Delays a poster for five weeks because she wasn't involved in the conception of it.  Five weeks go by and the only significant change is that the contact information is REMOVED.  No info on the website either.",
    "I told Lynn that you were trying to get in touch with someone at the yacht club. / I was there yesterday; there's no one there. / Yes, I think Pat is the only one there. / I'll get an interview with her. / I don't think so. / Alright.",
    "Someone asks if we would write a promo article for an event 6 months before it happens.  I assume, of course, that she wouldn't go for it, AND that it is completely unnewsworthy.  She, of course, says it's a great idea and asks me to cover it.",
    'Months before we start working on the OnGuard, we suggest modelling after Valcartier; she says "we don\'t have time; it\'s too late to be thinking about this." Then, "We want to make sure it\'s perfect before we do it." We proceed to publish shit.',
    'Cuts to public funding force management to cut essential services to the CF, such as fitness and sports, leaving community recreation, newspapers, marketing, and excessive management staff untouched.',
    "Did you buy any of the paper I asked for? / No, there wasn't time. / Why did you buy $1400 worth of letter-sized and legal? / Oh, I don't know... I panicked. (after being given $5000 and a list of business-essential paper from J)",
    'Well, you better figure it out. (coming from someone who is supposedly in a position of authority, and supposedly responsible for "figuring it out")',
    'Including J in meetings only by asking him if he has anything to say. But most meetings were drilling me about pointless things that I need to get done, and so that she can talk about random things that happen to her.',
    'Giving us permission to arrive at work on time.',
    "It doesn't make sense to have a meeting before we've made any important decisions.",
    "Our microwave is broken; I think it's shooting out radiation. / That's bullshit.",
    'Having competing Facebook pages and groups for years, with no plan to set it right.',
    'TN has air conditioners, despite sponsorship being denied air conditioners on grounds that they were security threats.',
    'Entities using bit.ly URLs instead of URLs that I make for them.  Also, making bit.ly URLs that go to our site, which has a text (non-linking) URL that people would have to copy and paste into their browser.',
    "Taking photos for a photo board project that is delayed at least a year, and makes no sense, and isn't backed by superiors, only to have us leave, never to complete the project.",
    "Always says the analytics are down. The analytics are never down. We don't get relevant hits to our website. Says it's because I don't update the site. She doesn't even receive the analytics reports.",
    'Asking me to cover events that have already passed.  E2C, for example.  She was asked to cover it a month before it happens, says she doesn\'t want to "give them free advertising", then after it happens, asks me to cover it.',
    'Paid $800/month for printer and $700/month for web hosting.  Entities rarely consulted the studios to have posters/schedules printed, and the web master was fired...   Started paying $1800/year for stock images and lost both designers... ;)',
    'J sends a draft poster to a client, and they print it off (low-res) and tape it all over the base.',
    'Just a little while ago I was one man deep. I used to tell people, "I\'m one man deep." I was told to stop saying that. I made the organization look bad.',
    "They must have added the combination dial recently. I don't remember that. (wtf comment about the safe that fell from the sky)",
    'Taking every Friday off, so that everyone else has to get their work done a day early so she can review it.',
    "Just got an invoice, do you know what it's for? / Why don't you open the envelope and find out? / Oh, I will.",
    'Not understanding that people have a right not to have their photos in advertising without their permission.',
    'She has apparently been adding "-30-" to the ends of all of my articles as if they were press releases.  She adds it, sends it to the Herald, they remove it. Perfectly unnecessary.',
    'Likely on the chopping block for putting a ball on the tip of an R in the masthead.',
    "Dennis's SSL purchase of a few dollars wasn't allowed, so online registrations were shut down for a month at least, losing thousands.",
    "Why is she using different fonts for some of these stories? There are about 6 fonts being used here. / Oh, I think she's just having fun... I don't think anyone will notice. (Sadly, she's right, but, then, why am I editing something that isn't read?)",
    'Independent, wireless internet connection is replaced with internet connection that is locked down and slow.',
    'head of organization asked us to do work for her husbands political campaign.',
    "They are short staffed, so I don't think we're going to be able to get anything from them. / I thought you heard back from them in 15 minutes last time. / Well, that was luck. / (20 minutes go by) / Hey! Look at that! They wrote back already!",
    "Ben, I'm not an idiot. (After I said that the computer doesn't work because it is not plugged in; also note, it wasn't plugged in)",
    'After our begging for an intern, and after several people were disqualified for not being "good enough", BJ, awesome at everything, emails all of us, and we agree that he has to be hired. (never to get another intern again)',
    'BJ: dated a Victoria Secret model and a Hooters calendar model.',
    'BJ: crashed four Tiburons.',
    "You guys, we're losing focus. (BJ showed us a Batman trailer)",
    "BJ: chicken farmer.  Said that if chickens see blood on another chicken, they attack until it's dead.",
    'BJ: drinking 19 beers at Family Days. Hung over the next day, still shows up.  Woos several.',
    'BJ: Professional bartender, and a professional goalie.',
    '"The gyms don\'t use those logos". "Well they do and they are all over STAD" "Well they\'re not suppose to.."',
    'Well this is it, right?',
    'Always printing 10,000% more than we need. (OnGuard sitting in the hallway, Vitali-T sitting in the board room)',
    'Refusing an action shot of a carnival ride for Family Days because you could see portapotties (blurry because the ride was moving) in the background.',
    'Needing to defrost chocolate, because she felt a need to freeze it.',
    "I've got too many plates in the air / I've got people breathing down my neck. (excuses for not doing anything)",
    "Bought promotional cardholders, which was J's idea a year previous (which she mocked him for), but skimped and bought cardholders that were too small to hold a card, so that she could afford more frisbees.",
    'Sponsorship was extremely warm, and was not allowed to open their windows or have air conditioners installed, for security reasons.',
    "National manager thinks J is external (after meeting him at an employee event), so he can't send him a yellow ribbon. (Policy...?!)",
    'Military computers were using IE6 in a world of IE9.',
    'Having to approve hours and write a list of tasks, saying that we did what we are employed to do, every month.',
    "Fire inspection contractors come in once a month AND bi-annually; they check the fire alarm, and leave, even when the alarm didn't go off (and often didn't for up to three months).",
    'Constantly rebranding everything: completely losing any semblance of consistency. TN, the beach, HP, FL, everything.',
    "It's pay day today... But, then again, you knew that, didn't you? (wtf comment)",
    'Hitting herself in the face with an apple.',
    'Bravo Zulu',
    "You son of a bitch! I don't think you realize who you're talking to...",
    'I was in the shower....',
    'Refuses to cover story of Prime Minister and shipbuilding; sends me to cover story of Minister of Defence and shipbuilding. Refuses to do work for Gammon; sends me to do work for her friend in Ottawa. (Double standards, insane reasoning)',
    'J spends a year on a poster and pamphlet for a reconditioning program; gets stopped several times by people in Ottawa who want to make changes to it.  Months go by and all of a sudden they have printed a pamphlet without him.',
    'Could you get it done today? I have to leave at 2 because my son just caught his first frog.',
    'I suggest we research whether or not we need to create a brand identity guide; she gets upset, then asks if I want to write questions for her to ask. I suggest an online form; she sends an email.  Responses are mostly that it is not used.',
    "Says that she shouldn't let me take rock fest bottles outside of the office (We have boxes of them that we will never ever use).",
    "Receive a cheque for a large amount of money.  We can't deposit it because we don't know what it's for.  We call the organization who sent it to us, but they don't know why they sent it either.",
    'So I will bill for the cost of the ink alone. / Yes, and take 30% off. / Off of the cost? Are you serious? / Yep. That should make everyone happy. (ignoring the fact that rental fees have crippled us to the point of requiring public funding)',
    "Well, she is trying to do her job... oh.  I'm sorry.  That's rude. Jessica is trying to do her job. (Constantly apologizing for pronouns)",
    'Asking J if he could change a single letter (R) in the masthead.  It was Monday.  She asked, "Could you have it ready by...let\'s say: Wednesday?" And he said, "Maybe Thursday."',
    "I take garbage home a lot, but I draw the line at pizza boxes.  I'm not crazy.",
    'I am asked to write an article about Glooscap for a Navy phone directory (as if they are relatable things).  I never read the story.',
    'Telling Bonin to go ahead and write a competing article because mine will be better than his.',
    'Asked to sign an internet policy form that meant that we couldn\'t work on the internet. Warned about the "new dangerous internet".  Clearly written in the 90s.  Boss said to write down what you don\'t like about it, put it on the back, and sign it.',
    'Tour guide',
    "Ottawa preferring to hire people who don't know what they are doing.  Also, writing specifically that it is unacceptable that I know anything about web design.",
    "If we do it for one person, we'd have to do it for everyone.  (The most common excuse for not doing work)",
    'Head of the organization tells me that the community gateway project was designed to save money.  I tell him it sounds like it costs far more, and ask him if it has saved money.  He tells me that it should (someday).',
    "Won a base commander's coin in, by far, the most unproductive year of my life.  Almost wasn't invited to the ceremony, and J wasn't reserved a seat.",
    'Disapproving a marketing idea because it would only work for men (but cdn military is mostly men).',
    "I'm really glad that Mike is taking control and getting people to write stories (even though everyone should be going through marketing). / But they didn't write anything (in fact they asked me to write it last minute). / Oh... I know / (...wtf?).",
    "Asking J to replace a single comma in an ad that was completely copied from the week before, and asked him to send the ad again for her approval, as if she can't imagine what the lack of comma would look like.",
    'Refuses to trust emails. Prefers to burn documents to DVD and paying $25 to courier it across the city. Also emails the documents anyway. Always an hour late.',
    'Posting "." on Facebook and Twitter, to "test" if it is working.',
    'No one knowing about HP 50th anniversary.  Completely unmarketed.',
    'Blue Jays (meeting Roberto Alomar (Ben getting lost in an engine room with him))',
    'We publish advertorials that she finds online for free, but under the header of "Advertising Special", because "we need people to know that it\'s been paid for."',
    "Ben, what's tomorrow look like for you? / Nothing. / OK, someone is going to give me a call tomorrow (reads off a post-it note, then hands it to me); there's his info. / Do you want me to call him? / No. I just wanted you to know what was going on.",
    "Web designer finds out she's being fired in a business plan a year in advance.",
    'I get criticized for asking for a single day off as compensation for working late, in an unreasonably stressful environment, and inhaling paint "particulate".',
    'Head of entity quits and hires himself back as a contractor',
    'Advertises for a concert in a random, terribly designed publication: the atlantic connection.  Advertises for FL in a rural restaurant menu.  Both with no plan or consequence for cost or lack of impressions or lack of research.',
    'Tells a pregnant mother, holding her child, to stand on a wet bosu ball for six seconds to receive a cheap, plastic, promotional frisbee that someone was giving away for free behind her. (What was really balancing was a lawsuit)',
    "She walks in and asks me if I'm ready to go to cover an event. I tell her I had no idea that I was supposed to cover it, and she says \"Well, I can't. I'm too busy.\"",
    'Rock Fest.  Both because it was awesome, and because it was a disaster.  Meeting the bands, nice day, good music, terrible security guards...etc.',
    'Thanking J for playing soccer during work hours.',
    "We're missing a laptop. We'll check the serial numbers but do you think it is the pentium system? (Asset list was completely ambiguous)",
    'Auditor comes in asking specific, practical questions, receives life story and bullshit.',
    "Always accusing the garbage and recycling guys for not emptying the bins (as if it's her job), going so far as to call the head of the organization and schedule a complaint meeting; all the while they came, like clockwork, every week.",
    "Hello, Ben? Yes, Hi. We're going to have to stop calling you TN staff. / Why? / Well, some people are upset about it. / But I am TN staff. / Well, yes. But you're not full-time. We're going to have to call you Special to the TN.",
    'Caught in the Act was a column dedicated to catching employees in the act of doing their jobs.',
    'Obsessing over a web banner, making a collage, and eventually asking to have a navy wife removed from the photo with her family.',
    'If either of you want my job, you will probably be demoted.',
    'M threatens to kill Jmoney after she delays the planning of one of his events by more than a month for no good reason.',
    'J refuses to come up with marketing ideas for the marketing coordinator.  Demands she plan out an ad for him.  She waits till end of day to send him "Are you or your kids bored? Why not go swimming..." for an aquatics ad.',
    'I never drank any alcohol until I worked for the government',
    "I filled out a ticket, but apparently it was a ticket that stated that it wasn't a ticket; and it was assigned to an unstaffed position. (Later, this same group sent out a mass email asking that people stop contacting them)",
    'What did you have for lunch? / (Gone for two hours) A wrap. / A wrap?! Was it any good? / Yep.',
    "Buys office supplies for someone who doesn't work for us.",
    "I was just at a manager's meeting, and they decided that everyone is going to have to account for expenses as well as revenues. The accountants were there and they were nodding. It's going to be a tough change.",
    'Finally acknowledging after a year that her time spent with printer contractors were complete wastes of time.',
    'Receiving a certificate for CPR without being taught how to perform CPR.',
    'Drew Bilby',
    'That insert she forced us to do: She suggested the lead story be that a captain of some ship might get a pie in the face for charity. Nothing to do with us, yet we were paying to write about it.',
    'Did you say Black Hawks or Black cocks?',
    'Tells old man that she can scan, pretends to scan, pretends to scan again, and then one more time, and then says that it worked.  Later tells J that she found it on the FTP.',
    "We just got an extra $50K this year / What are we going to do with it?! / Well, a variety of things / Like what? / (no answer) / What did we do with it last year? / Well, it paid off the debt / So, we can't do that again this year cause it's paid off",
    'She needed me to make corrections to a survey; sent me corrections five minutes before the weekend, through the fax machine.  I get it Monday, and 14 blank pages go through the fax machine.  I laugh. And save the paper.',
    'Told I could wear casual clothes the next day while I had my feet on my desk, and while I was wearing sneakers with untied, pink laces, a hoodie, and shorts.',
    'Calling us to ask us how to do something or if we could come in whenever we take time off.',
    'GD job description says "process PDFs"',
    'Corrects J constantly: he said "a co-op".  She said "No.  It\'s ACOA."',
    'HP members/veterans despising our organization, telling stories of how we took their profits to purchase FL.',
    "You guys, you're so negative.  Stop it.  You're not being helpful.  We have to be better colleagues. We have to be nicer to her. (shit managers say when they are trying to avoid reality)",
    "We give Department of National Defence keys to a guy dressed in harley davidson, who doesn't give a name or a hello or a goodbye.  Says we can have keys in 5 minutes, because he's cutting them in his truck.  He drops them off and leaves silently.",
    "Someone tries to update our website, can't log in; we're told that employees' accounts are deleted every month; I ask IT support to reinstate her permissions; they say use the ticketing system; I do; they tell me she's not an employee; I laugh.",
    'Doing thinksail on company time.  Also doing our portfolios, and printing our resumes.  Head of organization tells me "If I were you I\'d be on job search sites every day".',
    "The graphic designer's budget was spent mostly on buying clip art CDs.  The webmaster's budget was spent mostly on buying pre-made websites, and CSS. What they did with their time is not-yet-known.",
    'The cleaner assembled four chairs that were delivered one month earlier, in an office of three people, making a total of 13 chairs. (good on so many levels)',
    'Not letting me go to lunch, because she was worried about what people might think.  Waiting until Jmoney and SP arrive to tell me I can leave (in front of them).',
    "Contractors installed hand rails in a freight elevator that hasn't worked for over a decade, only to close it and lock it up again.",
    'Doing a SWOT analysis for our marketing plan, without knowing what a SWOT analysis is.  Saying Mike in PA is a strength(?).',
    'After talking to the auditor for her, she said that she owed us lunch... After we didn\'t seem receptive to lunch, she desperately offered us money.  Said, "You like money, right?"',
    'We need all photos to be 600dpi (even though their printer was 200dpi).',
    'Says I need to do a PowerPoint that J did the year previous, and SP has all of the files for; refuses to purchase PowerPoint or ask J to do it.',
    "Local IT guy always let people do/believe whatever they wanted so that he wouldn't have to do more work/explain anything.",
    'Dropping our own FTP to email corrections line by line and attaching documents: then asking Herald to create an FTP for her, because she ceased to believe that emails could send documents; then criticized them for using the FTP...',
    "They said that no one could have their own websites; had to use a site that was identical to every other base; they wanted to be uniform and spend less.  Spent more, and contracted all of their sites to different contractors so they weren't uniform.",
    'Sponsorship, which by definition is responsible for bringing in financial support to offset costs of doing business, suffers $101K loss in what they referred to as their "best year ever"',
    'Ex-employee constantly showing up with huge smile and organization-branded clothing.',
    "Manager doesn't listen to us in the slightest.",
    'Submitting documents to layout before editing them, making the editing process much more time-consuming than it has to be.',
    "We were told if we didn't build an online employee profile on some expensive software we would not be considered for promotions: it was then used as a tool for refusing employee promotions (another employee got a job without building a profile).",
    "They're going to have to take out an ad. (The most common excuse for not covering newsworthy events)",
    '"He likes girls. Gay people don\'t have a choice. Action elephants!"',
    'I asked and he said that it comes with Royal Bank Blue. (yes, as in the Royal Bank of Canada logo)',
    'Last words were "I don\'t like touching people"',
    'She took a taxi from the TN, to the dockyard, carrying phonebooks, which someone else came to collect, but she refused to let them.',
    'For an ad for swimming, she led with "Are you or your kids bored?"',
    "Asset list was vague, and didn't include valuable things that we actually had.",
    "Mayor Clayton, a gigantic bunny, watches over the fun land also known as, Give Kids The World, a resort designed specifically for children with life-threatening illnesses. (Mayor Clayton survives two rounds of edits, should've been the title)",
    'Translating Fall Classic to Fall Classic',
    'Abandoning responsibilities suddenly and dramatically by saying "I gotta go, something\'s come up."',
    "TN is located beside a cat shelter, beside a grave yard, beside a bar.  On the other side is the building that doesn't exist.",
    'DAN CHEERS',
    "J, we're not going to get this done.",
    'Can we change prices to price, because then, when someone asks about our prices we can... Oh, I see what I did just there... Still, just change it.',
    'Wins Westjet tickets; immediately grabs a microphone to solicit women to travel with him, while muffled over the mic.  They always gave him the mic.',
    'No parking spots due to no snow plow: J is still required to show up for work, or else.  He arrives and proceeds to wait for work to do.',
    "Golf logos aren't green. (criticizing a golf logo for being green, completely neglecting the idea of typing golf logo into Google)",
    'Meeting with Gammon in the smoke room, side-by-side, not talking to each other.',
    "After a month, marketing intern reveals that marketing coordinator didn't accomplish anything.",
    'After tossing the calculated price sheet, and having us do projects for free--signing another printer lease after being crippled by the last one--the office was asked to prepare a calculated price sheet, based on the projects from the previous year.',
    "Oh J, we're not gonna make it, are we?",
    'Maybe Missy can come (to a meeting about her event).',
    'Assigned to Webmaster WY (All tickets were assigned to Wally, to die)',
    'Constantly being asked to take photos of food for sponsors.  "Chiquita needs photos of bananas, Ben!"',
    'Literally copying and pasting a Government of Washington terms of use policy for our website.',
    'We were mandated to have everything bilingual.  Our website, which was also forced on us, was unable to feature both languages.',
    'Curling club manager becomes second in command after keeping the management job for only a few months.  Senior employees are pissed.',
    'Playing Trouble while V and Bill talk about garbage directly in front of us.',
    'Told me to blow on her in an effort to show off her flute skills.',
    'J designs a binder spine (wtf?) for someone who was promoted away from our organization; he then goes on to say that the binder spine wasn\'t what he expected, saying "it\'s not brilliant." https://bozdoz.github.io/brilliant-binder-spines/',
    "Tells us a detailed story about a printer salesman dropping in to see her...twice in an hour, as if she hadn't told us before (and she told me the story three times)",
    'What happens without us: https://imgur.com/9ojB9g5',
    'Sink is full of water and dishes; she gets the plunger and sticks it in the sink; successfully plunges; then takes dirty dishes, and puts them in the drying rack; goes back to her office. Mission accomplished? J laughs and cleans them.',
    "Military hotel has the handicapped floor on the sixth floor (only in government would something like that happen). Fire fighter's have to walk up and carry them down six flights of stairs to safety.",
    "I have a new year's resolution: No more last minute projects. / (hysterical laughter followed by tasking J with a project that's due the next day)",
    'Can I have a lifeguard screaming the name of the beach? (incessant, bizarre reimagining of a logo that need not exist in the first place, sent as an image in a fax)',
    'Brings a sword into a military newspaper office, brandishes it and reads the japanese card aloud.',
    "You can't give someone nine days notice to do a full days work. (said by boss) (We do work with an hour's notice constantly)",
    'Losing $800K for a concert that no one wanted.',
    'Well, J, you did a good job today. (after being tasked with absolutely nothing)',
    'Li would say "Delete it, do it again, then delete it."',
    "She spends a day creating a spreadsheet of email responses, because she didn't use my online form.  HP says they use the guide all the time; say they send all documents to the manager for approval; manager says she never uses the guide.",
    "J makes a lot of money designing a booklet for communities in bloom.  The next year they don't go with him.  Design immediately plummets to high school student using Microsoft Word quality.  They have unlimited budget.",
    'Your time is actually my time. (unbelievable comment from supervisor)',
    "She's not our boss, we just have to work for her. (this applied to almost everyone)",
    "PA is short staffed right now so they said they can't help us. They have Grykowski and Banfield there. It's only the two of them. / What about Stansfield? / Yep. He's there. / Wait. Who are we talking about? / PA. / And how many are there? / Two.",
    'Constantly changing the name of the organization.  Already having three acronyms, finally changing it again, as if it were a serious/good decision!',
    "Says we're going to do a survey, but isn't sure why, and isn't interested in the results. I do all the work and she takes credit.",
    "Stacey brings me a CD of photos for a video for Frank; she apologizes for forgetting the other CD. I say don't worry, I'll just use the ones on the CD you brought.  She says no, twice, and takes it, and leaves. No idea why she came at all.",
    "Won't be in Monday. Soaked with pain management.",
    'Conversations with the cleaner, about his anus...',
    'Taxpayer money spent on a cat shelter, which continues never to be occupied by cats.',
    "He's probably fed up, and I don't blame him. (someone who was tasked with working with her)",
    "We have our performance reviews. Asks me what I want to do next year, I say nothing and tell her how I don't accomplish anything. She approves. J's last-year goals were impossible to accomplish.  She approves.",
    "Contractor does a new layout for us, voluntarily; we can't accept it because we're egotistical, so we demand the graphic designers do something else that looks drastically different than the local paper.  Why?  Why, indeed.",
    'Harassing anyone who comes in by asking "Who are you with?" or "We do a lot of work here," or "I\'m in charge here."',
    '90% of feedback/contact to the newspaper were requests to stop receiving the newspaper',
    'After a year or more of no pot lucks (which was common), we have a pot luck with three of us, and then she backs out.  J and I sit at the end of a long table in the board room, asking each other to pass us food. Then an ex-employee shows up(?).',
    'Editor is in. Prints a sign that says that, then prints another one that is Arial and bold, as if that is better.',
    'Covering a coffee break as a news event. (The lamest news story I have or will have ever covered)',
    "Eastlink (our real phone people) came in yesterday to ask if we've had any changes to our phone service, and she told them that we have a new digital screen, and we've replaced some computers(!?!?). The eastlink people's faces were priceless.",
    'The group responsible for communications stopped having meetings.',
    'This morning a comet landed in Argentina, killing millions; up next, how to balance bananas on your dogs nose. (Followed by news jingle: dah dah dah dah)',
    'The closet was filled with garbage.',
    'HR hires people and then trains them so that they are qualified to be in their position.',
    'Stacey asks me to create a video (for which I have little experience) literally a day before it is due. Had to work until 11 p.m. to get all of my work done, to manage to finish the video from start to finish the next day.',
    'Rather lavish business trips to pointless conferences',
    'Suggesting that we watch business/marketing documentaries so that we are educated and on the same page (as a communications group outing); she laughs (mocks the idea) and suggests we watch Godfather.',
    'Getting everyone to start smoking in the office.',
    'She motions to the cleaner like the owner of Jurassic Park to a baby dinosaur: "Come on then, come on then..."',
    'You keep saying "mmmhmmm"... Is that good?',
    "I can't ask Ben to do my work, that would be unreasonable. (Really!? Then why do I do your work?)",
    'Morning ritual to turn the printer off (after leaving it on all night), then turn it back on again. Then print emails for the bulletin board.',
    'Explaining a $20K expense with "gatorade and carrots." (She tried to explain sponsorship expenses)',
    'The B.I.G. is not used at all, by anyone.  We also put a lot of ongoing work into it, scheduling meetings, and adhering to strict deadlines.  Then the manager of the B.I.G. forgets about it for months.',
    'Announcing job cuts and demotions through a broken video, like Leia to Obi Wan.',
    "I like your video.  I mean, it's good, but it's just not ready yet.  So, we're going to just show a PowerPoint. (\"unready\", year-long-investment of a video worse than a generalized, out-of-date, pixelated PowerPoint?)",
    "Spend a day reenvisioning the MFRC section.  Decide to change the fonts instead and pretend it's all fixed.",
    'Says she has asthma, starts blowing smoke in the face of a coworker, then nearly chokes to death.',
    'If anyone suggested a productive change to something, they were told it had better be "perfect" (and not merely productive), otherwise they would continue to peddle their terribly conceived products (onguard revamp, promotional video, the studios...)',
    "Perhaps you're just not used to inhaling paint fumes (and you are?!).",
    'Having up to four staff meetings a day.',
    'Graphic designer creates his own fire escape plan for a military hotel (only in government would something like that happen).',
    'Printing 50+ photo release forms at a newspaper (which does not require permission to publish photos), and from that point on constantly asking if we have permission to use photos.',
    'Tulips are like world wars, for they are both world wide.  Ashes to ashes, tulips to tulips. (mocking a ridiculous TN story involving tulips in an over-the-top dramatic tone)',
    "Getting a report back from Li that had x's, check marks, circles, and lines through parts of it. Always trying to understand what she meant.",
    'Catches a hornet with her hands; says she is allergic to them.  J asks to confirm that she said what she said.  She says, "Oh yes, I break out in a small rash." He counters, "doesn\'t everyone when they get stung?" End of conversation.',
    'Companies having "Government discounts" for things.  Which means they charged us at least--at least--double.',
    'A CF Newspaper survey is delayed for more than 2 years, and possibly indefinitely.',
    'Family Days concerts, VIP free-alcohol tents, less work...etc.',
    '1:57 p.m. : Ad is approved. Sorry I missed your call, I was working on my abs. (After quick work and no response for the better part of a day, J makes his 2 p.m. deadline and goes home for the day)',
    'Here are some invoices that I need you to process; do you need GL numbers? / No. I never do anything with them. / Okay then. (leaves and brings me the GL list...)',
    'New boss deflects everything, saying "That\'s not really my thing, but how are you?"',
  ];

  // DOM elements
  const headline = document.getElementById('headline');
  const container = document.getElementById('headline-container');
  const nextbtn = document.getElementById('next');
  const prevbtn = document.getElementById('prev');

  /**
  * it shuffles an array
  *
  * @template {any[]} T
  * @param {T} a
  * @return T
  */
  const shuffle = (a) => {
      var j, x, i;
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i);
          x = a[i - 1];
          a[i - 1] = a[j];
          a[j] = x;
      }
      return a;
  };

  // save indices
  let dataobj = {};
  data.forEach((a, i) => {
      dataobj[i] = a;
  });

  // shuffle indices
  const outkeys = shuffle( Object.keys(dataobj) );
  const outlen = outkeys.length;
  let i = 0;

  /**
  * it updates location hash
  *
  * @return (hash: string) => string
  */
  const updateHash = (() => {
      let fun;

      try {
          fun = window.history.replaceState.bind(window.history, {}, document.title);
      } catch (e) {
          fun = window.location.replace.bind(window.location);
      }

      return (hash) => fun(hash);
  })();

  /**
  * it updates page content
  *
  */
  const update = () => {
      let original_index = outkeys[i];
      let newcontent = dataobj[ original_index ];

      // update location
      updateHash( `#${original_index}` );

      // add links
      newcontent = newcontent.replace(/(https?:\/\/\S+)/g, (a) => (
          `<a href="${a}" target="_blank">${a}</a>`
      ));

      // replace line breaks with HTML breaks
      newcontent = newcontent.replace(/(\/\s)/g, (a) => (
          `<br />`
      ));

      headline.innerHTML = newcontent;
      container.scrollTop = 0;
  };

  /**
  * it gets the next iteration of site content
  */
  const next = () => {
      i = (i + 1) % outlen;
      update();
  };

  /**
  * it gets the previous iteration of site content
  */
  const prev = () => {
      i = (outlen + i - 1) % outlen;
      update();
  };

  // content index is saved to location hash
  if (window.location.hash) {
      let first_index = window.location.hash.substr(1);
      if (outlen > first_index && first_index >= 0) {
          outkeys.splice(outkeys.indexOf(first_index), 1);
          outkeys.unshift(first_index);
      } else {
          console.log(`out of luck, ${outlen - 1} is the max`);
      }
  }

  // update the site content
  update();

  // listeners for click and keydown
  nextbtn.addEventListener('click', next);
  prevbtn.addEventListener('click', prev);

  window.addEventListener('keydown', (e) => {
      const { keyCode } = e;
      if (keyCode === 37) {
          // left
          prev();
      } else if (keyCode === 39) {
          // right
          next();
      }
  });

  // hot reloading
  if (module.hot) {
      module.hot.accept();
  }

  // service worker
  if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
          navigator.serviceWorker.register('./sw.js').then(function(registration) {
              // Registration was successful
              console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
              // registration failed :(
              console.log('ServiceWorker registration failed: ', err);
          });
      });
  }

})();
