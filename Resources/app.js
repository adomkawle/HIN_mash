var App = require('config/cfg_app');
// INCLUDE THEME CONFIGURATION FILE ============================
//var configFile = require('/config/cfg_globals');
//var config = new configFile();
// =============================================================
try {

	// REQUIRE INTERNET CONNECTION =================================
	Ti.Network.addEventListener('change', function(e) {
		Ti.API.info('==Networked changed==');
		Ti.API.info(JSON.stringify(e));

		if (!Ti.Network.online) {
			Ti.API.info("This app needs network connection. Please turn on your Interner connection!");
		} else {
			Ti.API.info("ONLINE !");
		}
	});

	if (Ti.App.Properties.getString('UDID') == null) {
		//Ti.App.udid = Ti.Platform.createUUID();
		Ti.App.Properties.setString('UDID', Ti.Platform.createUUID());
	}

	if (!Ti.Network.online) {

		Ti.App.Properties.setString('ONLINE', 'NO');

	} else {

		Ti.App.Properties.setString('ONLINE', 'YES');

	}

	App.initialize();

} catch(e) {
	Ti.API.info("Exception during initialization " + e);
}

var APP_DATA = [{
	"title" : "California Legalized Selling Food Made At Home And Created Over A Thousand Local Businesses",
	"pubDate" : "2/05 20:25",
	"link" : "http://healthynews2day.com/2014/california-legalized-selling-food-made-at-home-and-created-over-a-thousand-local-businesses/",
	"cat" : "Real Food Nutrition",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/02/pickled-preserves.jpg",
	"desc" : "Since January 2013 after the passage of California bill AB 1616 allowing homemade food to be sold legally, over 1,200 homemade food businesses have been approved in the State of California.</div>"
}, {
	"title" : "New Alzheimer’s Drugs Continue to Fail Where Coconut Oil Shines",
	"pubDate" : "2/05 13:55",
	"link" : "http://healthynews2day.com/2014/new-alzheimers-drugs-continue-to-fail-where-coconut-oil-shines/",
	"cat" : "Coconut Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/02/pickled-preserves.jpg",
	"desc" : "News here in January 2014 is reporting that two more Alzheimer drugs have failed during drug trials. Alzheimer's Disease represents a huge market for pharmaceutical companies, as millions of people are suffering from the disease, and the rate is increasing rapidly. Many pharmaceutical companies are trying to develop Alzheimer's drugs and vaccines.\n\nHowever, if we are to truly understand the Alzheimer's epidemic, we need to stop viewing senior citizens as a lucrative market for pharmaceutical products. The most successful drug of all time, Lipitor, is a cholesterol-lowering drug aimed at seniors that at one time out sold all other drugs combined. It is estimated that today one out every four Americans over the age of 55 is now taking statin drugs to artificially lower their body's cholesterol.\n\nUnfortunately, there is research pointing to a lack of cholesterol uptake to the brain as being associated with Alzheimer's patients. Therefore, poor dietary advice and excessive pharmaceutical drugs must be considered as a primary cause of Alzheimer's Disease.\n\nAll across the globe, people are starting to use coconut oil to treat Alzheimer's Disease, and the results have been nothing less than remarkable. In this report we take a look at some of these stories, as well as looking at research linking the high-fat ketogenic diet to curing many diseases such as Alzheimer's.</div>"
}, {
	"title" : "Fenugreek – 6 Reasons Why This Herb and Spice Belongs In Your Medicine Cabinet",
	"pubDate" : "2/04 22:36",
	"link" : "http://healthynews2day.com/2014/fenugreek-6-reasons-why-this-herb-and-spice-belongs-in-your-medicine-cabinet/",
	"cat" : "Alternative Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/02/fenugreek428-24.jpg",
	"desc" : "Trigonella foenum in graecum (Fenugreek) is a traditional herbal plant used to treat disorders like diabetes, low lactation, respiratory ailments, wounds, inflammation, gastrointestinal ailments, detoxification of heavy metals, pain, colds and even cancer. </div>"
}, {
	"title" : "Ketogenic Diet Improves Insulin Sensitivity and Numerous Aging Markers",
	"pubDate" : "2/04 12:48",
	"link" : "http://healthynews2day.com/2014/ketogenic-diet-improves-insulin-sensitivity-and-numerous-aging-markers/",
	"cat" : "Real Food Nutrition",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/02/fenugreek428-24.jpg",
	"desc" : "A high-fat low-carb ketogenic diet can optimize your metabolism. \n\nNumerous studies have shown that lowering your caloric intake may slow down aging, help prevent age-related chronic diseases, and extend your life. As you age, your levels of glucose, insulin and triglycerides tend to gradually creep upward.\n\nA 2010 study examined the effects of a high-fat diet on typical markers of aging. Study participants were given a high-fat, low-carbohydrate diet with adequate protein, and the results were health improvements across the board. Serum leptin decreased by an average of eight percent, insulin by 48 percent, fasting glucose by 40 percent, triglycerides by nearly eight percent, and free T3 (thyroid hormone) by almost six percent.</div>"
}, {
	"title" : "The Top 5 Health Benefits of Oregano",
	"pubDate" : "2/03 19:53",
	"link" : "http://healthynews2day.com/2014/the-top-5-health-benefits-of-oregano/",
	"cat" : "Alternative Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/02/oregano.jpg",
	"desc" : "Oregano contains vitamins A, C, E, and K, as well as fiber, folate, iron, magnesium, vitamin B6, calcium, and potassium. Oregano has anti-inflammatory, anti-microbial, and anti-fungal effects, and may kill MRSA, listeria, and other pathogens. Oregano essential oil may be useful for respiratory ailments like colds and flu. Adding oregano to meat before cooking may help reduce the amount of toxic compounds created by the cooking process.</div>"
}, {
	"title" : "Why is the CDC and FDA Still Recommending the Failed Whooping Cough Vaccine?",
	"pubDate" : "2/03 18:59",
	"link" : "http://healthynews2day.com/2014/why-is-the-cdc-and-fda-still-recommending-the-failed-whopping-cough-vaccine/",
	"cat" : "Medicine Watch",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/02/oregano.jpg",
	"desc" : "2013 was the year the CDC and FDA finally admitted there were problems with the pertussis (whooping cough) vaccine.\n\nWhen cases of whooping cough spiked in 2012, the media and medical community was quick to rush in and blame unvaccinated children. The data, however, could not support that claim.\n\nIn 2013, there were two major research papers published documenting the failure of the pertussis vaccine. I don't believe the first one, published in early 2013, received any mainstream media exposure at all, while the second one, later in the year, was back-page news. However, both of these studies should have been headline stories. The first one showed how pertussis was becoming vaccine-resistant, while the second, published by the FDA, showed that those vaccinated for whooping cough still carried around the virus and spread it to others.\n\nSo the both the CDC and the FDA were aware in 2013 that the whooping cough vaccine was not effective, and yet it is still part of the vaccine schedule. Why?\n</div>"
}, {
	"title" : "Confessions of an ex-TSA Agent",
	"pubDate" : "2/02 20:37",
	"link" : "http://healthynews2day.com/2014/confessions-of-an-ex-tsa-agent/",
	"cat" : "Alternative Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/02/oregano.jpg",
	"desc" : "I hated it from the beginning. It was a job that had me patting down the crotches of children, the elderly and even infants as part of the post-9/11 airport security show. I confiscated jars of homemade apple butter on the pretense that they could pose threats to national security. I was even required to confiscate nail clippers from airline pilots—the implied logic being that pilots could use the nail clippers to hijack the very planes they were flying.\n\nOnce, in 2008, I had to confiscate a bottle of alcohol from a group of Marines coming home from Afghanistan. It was celebration champagne intended for one of the men in the group—a young, decorated soldier. He was in a wheelchair, both legs lost to an I.E.D., and it fell to me to tell this kid who would never walk again that his homecoming champagne had to be taken away in the name of national security.\n\nBut the only people who hated the body-scanners more than the public were TSA employees themselves. Many of my co-workers felt uncomfortable even standing next to the radiation-emitting machines we were forcing members of the public to stand inside. Several told me they submitted formal requests for dosimeters, to measure their exposure to radiation. The agency’s stance was that dosimeters were not necessary���the radiation doses from the machines were perfectly acceptable, they told us. We would just have to take their word for it. When concerned passengers—usually pregnant women—asked how much radiation the machines emitted and whether they were safe, we were instructed by our superiors to assure them everything was fine.\n</div>"
}, {
	"title" : "Prebiotic in Wheat Bran Boosts and Feeds Gut Bifidobacteria",
	"pubDate" : "2/02 14:54",
	"link" : "http://healthynews2day.com/2014/prebiotic-in-wheat-bran-boosts-and-feeds-gut-bifidobacteria/",
	"cat" : "Real Food Nutrition",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/Wheat-field.jpg",
	"desc" : "Research from European and American scientists are confirming that wheat bran contains a special prebiotic fiber called arabinoxylan oligosaccharides which boost bifidobacteria content within the gut, and helps relieve numerous gastrointestinal issues. \n\nThis isn’t the first study to find prebiotics in wheat bran. In fact several clinical studies have found this over the past few years.\n\nThis probiotic issue is also an important aspect related to some of the negative health issues related to gluten consumption. When our probiotic colonies are low, our ability to break down the various components of not only the bran but the gluten. \n\nGluten and gliadin proteins are contained in the germ, endosperm and bran of wheat. As shown in the research, when our probiotic colonies are reduced, our gut’s ability to consume/degrade these complex molecules is diminished.</div>"
}, {
	"title" : "More Evidence of Scientism as Religion",
	"pubDate" : "2/01 18:06",
	"link" : "http://healthynews2day.com/2014/more-evidence-of-scientism-as-religion/",
	"cat" : "Created4Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/Wheat-field.jpg",
	"desc" : "As shown in our recent documentary C.S. Lewis and the Case Against Scientism, C.S. Lewis compared science to magic in three ways: (1) Science as Religion, (2) Science as Credulity, and (3) Science as Power. In the film, Discovery Institute's Dr. John West explains that for many people, science (or better, scientism) serves as a quasi-religion. It gives their lives meaning. Evolution in particular provides an overarching, cosmic vision that many find satisfying: a view of something larger than their experience: the birth and ultimate fate of the universe, with mankind struggling against natural odds in its rise to dominance.\n\nTo further illustrate, here are a few recent cases from science news of evolutionary thinking serving in the role of religious faith.</div>"
}, {
	"title" : "The Limitations of Science and the Medical Paradigm",
	"pubDate" : "2/01 15:45",
	"link" : "http://healthynews2day.com/2014/the-limitations-of-science-2/",
	"cat" : "Created4Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/Wheat-field.jpg",
	"desc" : "Science has lifted us from the ignorance of the Dark Ages into the understandings we hold today. It has increased our standards of living, lengthened our life spans, and enriched our lives in every way. Music, the arts, our governments, our social customs, our religious beliefs, our educational institutions, our recreations, our modes of travel, our means of communicating, our working, our eating, our sleeping—all aspects of our culture have been transformed by the touch of technology. It is little wonder, then, that we have become conditioned to look to science for the solutions of all our problems and for the answers to life’s questions.\n\nBut science, powerful as it is, is a false god. Awed by the spectacular material advancements science has brought us, we have come to expect more of science than it is capable of delivering. Many individuals, not recognizing the limitations of science, stand in expectation of results that will never come. Science does not have all the solutions. It does not have all the answers. It never has and it never will.\n\nThe purpose of this article is to clearly present science for what it is—no more and no less. Many answers can be obtained by the scientific method, but there are many more that cannot. It is not my intent to destroy your faith in science. As a lifetime professional scientist myself, I am duly respectful of its potential. I am also aware of its limitations. When it comes to consideration of life in its fullness, these limitations are very great. Therefore, while I don’t want to destroy your faith in science, I do want to disturb it and to encourage you to question its validity as an approach to living.\n\nIn order to clearly understand the limitations of science, one must first have a clear picture of what science is. Interestingly enough, there is a large fraction of scientists who do not have an accurate and complete picture of the boundaries of science. This might sound hard to believe, but it is true. It is entirely possible to practice science to a high level of success in obtaining useful, valid results, while at the same time never being fully aware of its limits.\n\nIn an analogous way, it is entirely possible, if not common, for doctors to practice medicine without being aware of its limits. In fact, it is not at all uncommon for people to confuse medicine with science. And neither is it unusual for doctors to confuse science with technology. The practice of medicine, while it may be partially described as “applied technology,” is not a science.\n\nWhile medicine bases some of its practices on scientifically derived data, the practice of medicine is not, itself, a science. Medicine is a discipline of opinion where accepted standards of practice are determined by a consensus of the majority, not by the scientific method.\n\nThe reason the limits of science are not widely recognized and understood lies in our educational systems, which train scientists and health care providers in how to exercise the methods of science and apply their results, but do not encourage a questioning of the fundamental assumptions behind the methods themselves. The purpose of medical training is unquestioning indoctrination, not cognitive education. It is to promote, protect, and apply the prevailing paradigm���not to question it.</div>"
}, {
	"title" : "95 Year Old Man in Senior Care Facility Shot 5 Times by Police with Bean Bags Resulting in his Death",
	"pubDate" : "1/31 23:06",
	"link" : "http://healthynews2day.com/2014/95-year-old-man-in-senior-care-facility-shot-5-times-by-police-with-bean-bags-resulting-in-his-death/",
	"cat" : "Medicine Watch",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/Wheat-field.jpg",
	"desc" : "Thanks to reporter John Kass of the Chicago Tribune, the story of John Wrana's death at the hands of Park Forest, Illinois police is not dying without answers to questions as to why a 95-year-old man, who needed a walker to get around, was tasered and shot by police in riot gear resulting in his death.\n\nJohn Kass is reporting that although an investigation is still pending more than 6 months after John Wrana's death, due apparently to public pressure that is being applied mainly through Kass at the Chicago Tribune, Kass has now received a copy of the report which reveals Mr. Wrana, a World War II veteran, was shot 5 times by rounds of bean bags from a shot gun, which resulted in his death.\n\nJohn Wrana was suffering from a urinary tract infection and refused medical treatment, not wanting to go to the hospital. The police report states that Mr. Wrana was \"brandishing a knife with a 7-inch blade,\" something other residents and staff dispute, stating they had never seen this.\n\nWhen Mr. Wrana refused to cooperate with the police in his managed care facility, inside his own room, they tasered him. He still did not cooperate, so they shot him 5 times with bean bag rounds, fired at close range from a shot gun. He died of internal injuries shortly after that.\n\nAccording to the latest news that Kass is reporting, in the police report the reason that police state they had to shoot Mr. Wrana was that \"they were afraid for their lives.\" There were apparently at least 4 officers, and one officer had a riot shield and Taser. </div>"
}, {
	"title" : "Beta-Blockers Killed 800,000 in 5 Years: “Good Medicine” or Mass Murder?",
	"pubDate" : "1/31 14:30",
	"link" : "http://healthynews2day.com/2014/beta-blockers-killed-800000-in-5-years-good-medicine-or-mass-murder/",
	"cat" : "Medicine Watch",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/Certificate-Of-Death-And-Pills.jpg",
	"desc" : "Most people assume that scientific integrity is somehow assured; that there are safeguards along the way, preventing fraudulent research from harming patients.\n\nUnfortunately, scientific misconduct has become a very serious and widespread problem that threatens the entire paradigm of science-based medicine—unless changes are made.\n\nAgain and again, papers assessing the prevalence of scientific fraud and/or the impact this is having shows that the situation is dire and getting worse. In short, we have lost scientific integrity, and without it, “science-based medicine” is just a term without substance.\n\nConflict of interest is another pervasive problem within the research field, and the featured article highlights a case that contains both.\n\nBeta-blockers are drugs commonly used in the treatment of high blood pressure and congestive heart failure. They work primarily by blocking the neurotransmitters norepinephrine and epinephrine (adrenaline) from binding to beta receptors, thereby dilating blood vessels, which reduces your heart rate and blood pressure.\n\nUntil recently, the European Society of Cardiology (ESC) also recommended using beta-blockers in patients undergoing non-cardiac surgery.\n\nA recent article in Forbes Magazine highlights how medical guidelines based on questionable science may have resulted in the death of hundreds of thousands of patients in just a few years:\n\n“Last summer, British researchers provoked concern when they published a paper raising the possibility that by following an established guideline UK doctors may have caused as many as 10,000 deaths each year,” Larry Husten, editorial director of WebMD professional news, writes.\n\nNow, they have gone a step further and published an estimate that the same guideline may have led to the deaths of as many as 800,000 people in Europe over the last five years…\n\nThe 800,000 deaths are comparable in size to the worst cases of genocide and mass murder in recent history.”</div>"
}, {
	"title" : "Stop the GMO Apple",
	"pubDate" : "1/30 19:17",
	"link" : "http://healthynews2day.com/2014/stop-the-gmo-apple/",
	"cat" : "Sustainable Agriculture",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/gmo-apple.jpg",
	"desc" : "If you haven’t heard, apples are the single most popular fruit served in school lunchrooms across the U.S. and a fruit so iconic it was the fruit that inspired Isaac Newton’s theory of gravity and the heartbeat of the phrase, \"as American as apple pie\"!\n\nTragically, a Canadian firm has created a new GMO apple, using a new “gene silencing” technique that could interfere with the expression of genes in humans, even silencing vital human genes, potentially causing serious health problems.\n\nRight now, the Obama administration is considering the approval of the world’s first genetically engineered apple, known as the ArcticApple®, which has been engineered to silence the natural browning enzyme that may help apples fight disease and pests.</div>"
}, {
	"title" : "Warning: Government Can Be Harmful to Your Health",
	"pubDate" : "1/30 19:04",
	"link" : "http://healthynews2day.com/2014/warning-government-can-be-harmful-to-your-health/",
	"cat" : "Medicine Watch",
	"image" : "http://healthynews2day.com/wp-content/uploads/2011/03/capitol_hill.jpg",
	"desc" : "Trust in our government was a mere 19 percent in 2013 according to Pew Research Center. Not surprisingly, 56 per cent of Americans think it is not the government’s responsibility to provide a healthcare system. Waivers, favors, off-the-cuff rule changes, and the bungled launch of the Affordable Care Act website validate that distrust. Bureaucratic incompetence and cronyism are not the only reasons we should be wary of government involvement in our medical care.\n\nLet’s recall the appalling Tuskegee Syphilis Study lasting from 1932 to 1972. The U.S. Public Health Service used 400 hundred mainly poor, illiterate black sharecroppers with syphilis as lab animals. They were told they had “bad blood,��� but not that they were actually suffering from a serious but treatable disease. All subjects succumbed to untreated syphilis so our government could track the natural progression of the disease.\n\nIn 1989, a Centers for Disease Control and Prevention (CDC)-sponsored study tested an experimental measles vaccine on 1,500 six-month old Black and Hispanic babies in Los Angeles. The CDC admitted in 1996 that parents were never informed that the vaccine was experimental.</div>"
}, {
	"title" : "Tropical Traditions Announces New Line of Organic Essential Oils from France for U.S. Market",
	"pubDate" : "1/29 21:10",
	"link" : "http://healthynews2day.com/2014/tropical-traditions-announces-new-line-of-organic-essential-oils-from-france-for-u-s-market/",
	"cat" : "Alternative Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/florihana-essential-oils-banner12.jpg",
	"desc" : "Tropical Traditions announced today that they are now offering Florihana organic essential oils imported from France. From the company's website:\n\n\"Florihana is a distillery located in Provence, France, not far from the cities of Grasse and Cannes. Their distillery is located in an extraordinary site rich in biodiversity: The Caussols plateau in the heart of the French Riviera. The French are world-renowned throughout history when it comes to high-quality plant fragrances, and Florihana carries on the tradition today with much pride. Florihana has a world-renowned history of producing some of the highest quality essential oils in the world, and their products are well-known in Europe, as well as throughout Japan and China.\"\n\nTropical Traditions reports they have been using Florihana organic essential oils in their skin care products for over ten years. Tropical Traditions skin care products are based on their Gold Label Virgin Coconut Oil sourced form the Philippines. With over ten years of experience in using Florihana essential oils, they felt that it was time to offer the same essential oils to their customers in the United States.</div>"
}, {
	"title" : "With so Many Vaccine Injuries, Why does the Government Claim that Vaccines are “Safe and Effective”?",
	"pubDate" : "1/29 16:45",
	"link" : "http://healthynews2day.com/2014/with-so-many-vaccine-injuries-why-does-the-government-claim-that-vaccines-are-safe-and-effective/",
	"cat" : "Medicine Watch",
	"image" : "http://healthynews2day.com/wp-content/uploads/2013/02/vaccines-life-expectancy.jpg",
	"desc" : "The fact that vaccines are dangerous is something that should never be disputed, as the data is overwhelming and the U.S. government concedes cases of vaccine injuries and deaths every year in vaccine court. We have published these statistics at Health Impact News.\n\nSince drug manufacturers have complete legal immunity in the U.S. from any damages or deaths due to vaccines, the true cases of vaccine damages almost never make it into the mainstream media. When someone dares to publish a true story of vaccine damage, as Katie Couric did last December when she interviewed families who were injured or suffered death due to the Gardasil vaccine, they are immediately vilified for daring to oppose the general consensus of the medical community. In the case of Couric, she came out and apologized and had to bring on the government Assistant Surgeon General to give the standard view that vaccines are safe.\n\nIn this excellent article by Markus Heinze, he explains how the pharmaceutical companies are able to continue getting approval to put more dangerous vaccines in the market by showing their own studies that supposedly are proving they are \"safe and effective\" are not even tested against true placebos. This is basic scientific information that the mainstream media has no interest in covering, so read it here and learn.</div>"
}, {
	"title" : "Ketogenic Diet Can be used to Control Seizures",
	"pubDate" : "1/28 17:47",
	"link" : "http://healthynews2day.com/2014/ketogenic-diet-can-be-used-to-control-seizures/",
	"cat" : "Real Food Nutrition",
	"image" : "http://healthynews2day.com/wp-content/uploads/2013/01/high-fat-diet.jpg",
	"desc" : "A high-fat, low-carbohydrate diet called 'ketogenic diet' could be used to control seizures in epilepsy patients. According to a latest study, there is a direct link between metabolism in brain cells and their ability to transmit signals.\n\nThe research by scientists at McGill University and the University of Zurich shows that metabolism can control \"the processes that inhibits brain activity\" seen in people with epilepsy. The study team wanted to know why putting children with epilepsy on high-fat and low-carb diet is effective in controlling seizures.\n\nOther researchers had previously assumed that metabolism and signalling in brain cells are un-related processes. However, the current study shows that both the pathways are connected. \n\nThe ketogenic diet lost its popularity post-1950s after anticonvulsant drugs hit the market. But, these drugs carry many side-effects and also don't work in about 20 percent of the patients. The current study might offer a different approach on controlling the condition.</div>"
}, {
	"title" : "Deanna Protocol Offers Nutritional Program to Slow or Stop ALS (Lou Gehrig’s Disease)",
	"pubDate" : "1/28 17:13",
	"link" : "http://healthynews2day.com/2014/deanna-protocol-offers-nutritional-program-to-slow-or-stop-als/",
	"cat" : "Alternative Health",
	"image" : "http://healthynews2day.com/wp-content/uploads/2013/01/high-fat-diet.jpg",
	"desc" : "The Deanna Protocol is gaining national attention as an alternative natural treatment to slow down or even stop the progression of Amyotrophic lateral sclerosis (ALS), commonly known as \"Lou Gehrig's disease.\"\n\nIn the video below the physician who discovered this protocol gives his story. He is a retired surgeon, and when his daughter was diagnosed with ALS, he looked beyond the conventional medical system, which offered no hope, and turned to nutrition and natural methods instead.\n\nThe protocol utilizes GABA and other supplements (see Table below), along with a ketogenic diet. The ketogenic diet is a high-fat low-carb diet that has been used to successfully treat many neuro-degenerative diseases, such as Alzheimer's, and it has been successfully used to treat epilepsy where drugs fail. We have reported much of the research regarding the ketogenic diet here at Health Impact News. The ketogenic diet is currently being studied in its effect on starving cancer cells.\n\nCoconut oil is an important component of a ketogenic diet, as it provides ketones due to the presence of medium chain fatty acids. We reported the story of \"Clarence\" back in 2012, who claims he actually reversed ALS by eating large amounts of coconut oil.</div>"
}, {
	"title" : "Mississippi Parents say it���s time for the state to allow parents to have the legal right to select, delay or opt out of vaccines",
	"pubDate" : "1/27 19:40",
	"link" : "http://healthynews2day.com/2014/mississippi-parents-say-its-time-for-the-state-to-allow-parents-to-have-the-legal-right-to-select-delay-or-opt-out-of-vaccines/",
	"cat" : "Medicine Watch",
	"image" : "http://healthynews2day.com/wp-content/uploads/2013/01/high-fat-diet.jpg",
	"desc" : "Mississippi Parents for Vaccine Rights says it’s time for the state to allow parents to have the legal right to select, delay or opt out of vaccines.\n\nAbout 30 members of the group rallied [January 22nd] at the state Capitol in an effort to push for a bill this year to allow exceptions to the state’s immunization law. Mississippi doesn’t allow philosophical or religious exemptions from immunizations.\n\n“There are 48 states that allow that right,” said Mary Jo Perry of Pelahatchie, co-director of Parents for Vaccine Rights.\n\nCurrently, the only way parents have of getting around the vaccines required to enter school is to homeschool their children.\n\nPerry and others in the group said they aren’t anti-vaccine; instead, they are concerned about the rapid, piggy-back schedule of the vaccines.\n\n“Some parents would like to slow it down,” Perry said of the vaccination schedule. “We want to have that option.”\n\nPerry said her son suffered a grand mal seizure, which she said she believes it was due to a vaccination since it occurred within hours of her son getting the shot.\n\nShe said it is difficult to get a waiver for health reasons from the vaccinations.\n\nLindey Magee, co-director of Mississippi Parents for Vaccine Rights, said the group has heard from some parents who won’t move to the state because of the lack of a vaccine exception in law.</div>"
}, {
	"title" : "Family Farm in Michigan Threatened with Armed Enforcement from DNR for Raising Heritage Pigs",
	"pubDate" : "1/27 17:25",
	"link" : "http://healthynews2day.com/2014/family-farm-in-michigan-threatened-with-armed-enforcement-from-dnr-for-raising-heritage-pigs/",
	"cat" : "Sustainable Agriculture",
	"image" : "http://healthynews2day.com/wp-content/uploads/2014/01/Picture-030-1024x574.jpg",
	"desc" : "Mark Baker of Baker Green Acres gives an update on their ongoing battle with the State of Michigan regarding their heritage breed free range hogs. Their case might be reaching a dangerous point with the State of Michigan, as Mark is reporting that a USDA field agent has stated in writing that Mark is a \"gun-waving lunatic\" and that the USDA would not come to visit his farm, but that \"armed DNR agents\" will come instead.\n\nHealth Impact News has reported on the Baker Green Acres family farm situation since April 2012, when the DNR decided to label all free range hogs in the State of Michigan as illegal, by classifying them as \"feral\" pigs. Mark and others have reported that the new definition of \"feral swine\" adopted by the DNR in 2012 came directly from the commercial pork industry, which raises all commercial pork indoors in confinement.\n\nSince the State made it a criminal offense to keep their heritage breed hogs that have now been ruled illegal, most hog ranchers destroyed their herds and went out business. They did not want to face arrest on criminal charges.\n\nMark Baker decided to challenge the ruling, however, and has been involved with a long legal battle with the State of Michigan since then. Various actions have been taken against the Baker family to try and force them out of business, such as levying a fine of $700,000 against them, and getting the USDA to refuse to process their pork at a USDA processing facility, effectively eliminating most of their market to sell their pork.\n\nNow, with court case getting closer, Mark is worried that since they believe they have such a strong case against the State, they may try something else before he gets his say in court. As you watch the video below for the latest update, he will explain that he and his family are peaceful people, and portraying him as \"gun-waving lunatic\" is not true.</div>"
}];

Ti.App.Properties.setList('App_DATA', APP_DATA);