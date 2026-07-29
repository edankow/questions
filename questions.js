// This constant holds the raw data for the study tool
const rawCsvData = `ID,Question,Chapter,Paragraph
KSA001001260221002, "[person] is [doing activity]. Can HKBH see them?", 1, 1
KSA001001260317003, "How often does [person2] think about Hashem while [doing activity]?", 1, 1
KSA001002260221003, "[person2] wakes up. What do they notice promptly?", 1, 2
KSA001002260221004, "Should [person2] say modeh ani after waking before they wash their hands?", 1, 2
KSA001002260221005, "What should [person] say immediately after waking up in the morning?", 1, 2
KSA001003260221006, "[public figure] mocks [person] for keeping the mitzvah of [mitzvah]. How should [person] feel in response?", 1, 3
KSA001004260221007, "From most to least valuable for [person1], rank staying in bed when they’re tired, getting [number] thousand dollars, or getting up to learn Torah or daven.", 1, 4
KSA001004260221008, "Is it more important for [person] to [do something for avodas Hashem], or to [do something that results in material gain or avoids material loss]?", 1, 4
KSA001004260221009, "It’s time for [person] to get up but it’s cold. Do they need to get up immediately?", 1, 4
KSA001004260221010, "It’s time for [person2] to get up but they aren’t sure if they slept enough yet. Do they get up anyway?", 1, 4
KSA001005260221011, "[man] is awake at [time of night] studying [a part of Torah]. What does he have to do to become a worker for Hashem?", 1, 5
KSA001005260221012, "When can [person] say tikun chatzot?", 1, 5
KSA001005260221013, "When is the best time for [man2] to get up in the morning?", 1, 5
KSA001006260221014, "Can [person] say [part of tanach] from memory?", 1, 6
KSA001006260221015, "If [person3] is blind, can they say [part of tanach] from memory?", 1, 6
KSA001007260221016, "[person] is saying Maamados and gets to the end where it finishes ברוך אתה ה' שומע תפלה. What ending beracha should [person] say?", 1, 7
KSA002001260221017, "[person2] wakes up with tumah energy on their fingers. How do they remove the energy?", 2, 1
KSA002001260221018, "After [person] wakes up in the morning, can [person] travel to [place] before washing their hands?", 2, 1
KSA002002260221019, "Can [man2] go from [place1] to [place2] without wearing tzitzit?", 2, 2
KSA002002260221020, "Does [man] wear tzitzit while [doing activity] in [a place]?", 2, 2
KSA002003260221021, "[person] doesn't have enough water to wash their whole hands when they get up in the morning. How much of their hands do they need to wash?", 2, 3
KSA002003260221022, "Does [person3] rinse their mouth in the morning?", 2, 3
KSA002003260221023, "Does [person3] wash their face in the morning?", 2, 3
KSA002003260221024, "How many times does [person] pour water on each hand after waking up?", 2, 3
KSA002003260221025, "When [person] washes their hands in the morning, which hand does [person] use to pick up the washing cup first?", 2, 3
KSA002003260221026, "Which hand does [person] wash first in the morning?", 2, 3
KSA002004260221027, "[person2] needs to make [pasta dish]. Can [person2] use the water from washing their hands when they wake up?", 2, 4
KSA002004260221028, "After [person] washes their hands upon waking, can they use the water from their hand-washing for [task that requires water]?", 2, 4
KSA002005260221029, "Before [person] washes their hands in the morning, can they touch their [a body opening]?", 2, 5
KSA002005260221030, "Before [person] washes their hands in the morning, can they touch their [food item]?", 2, 5
KSA002006260221031, "[person] is in [a place without access to water]. What should they do to prepare their hands for shacharit?", 2, 6
KSA002006260221032, "[person1], before tefillah, wipes his hands on [something]. Does he wash his hands with water when [person2] comes with [a container] of water a bit later?", 2, 6
KSA002006260221033, "[person2] washes their hands for shacharit by pouring [adjective] water on them out of [a kind of thing that can hold liquid]. Can they make a beracha?", 2, 6
KSA002006260221034, "[person2] washes their hands with soap and water before shacharit. Do they make a beracha?", 2, 6
KSA002006260221035, "If [person1] doesn’t have access to any water, how should they wash their hands before tefillah?", 2, 6
KSA002006260221036, "[person1] washes before shacharis with water from [a source of flowing water]. What bracha should they make?", 2, 6
KSA002006260221037, "If [person1] washes their hands before tefillah with [a source of flowing water], do they still need to wash their hands later?", 2, 6
KSA002006260221038, "If [person1] wipes their hands before tefillah on a [thing] instead of washing them with water in the morning, what bracha should they make?", 2, 6
KSA002006260221039, "When [person] gets to shacharit, there isn’t a washing cup. How will [person] prepare their hands for tefilah?", 2, 6
KSA002007260221040, "[Person] needs to urinate. Can they say [a beracha] first?", 2, 7
KSA002007260221041, "[person1] is hungry and needs to urinate. Can they say a beracha and eat and then urinate?", 2, 7
KSA002007260221042, "[Person2] needs to defecate. Can they say [a beracha2] first?", 2, 7
KSA002008260221043, "[person] sleeps for [number] minutes during the day. Should they wash their hands when they wake up like they normally do in the morning?", 2, 8
KSA002008260221044, "[person] stays awake all night. Should they wash their hands normally in the morning?", 2, 8
KSA002008260221045, "[person] woke up and washed their hands properly while it was still night. Do they need to wash their hands again after dawn?", 2, 8
KSA002009260221046, "[person] leaves a cemetary. Do they need to wash their hands afterward?", 2, 9
KSA002009260221047, "[person] touches their [a body part]. Do they need to wash their hands afterward?", 2, 9
KSA002009260221048, "[person] trims the nail of their left pointer finger. Do they need to wash their hands afterward?", 2, 9
KSA002009260221049, "[person] uses their [body part] to pull off their left shoe. Does [person] need to wash their hands afterward?", 2, 9
KSA002009260221050, "[person] was in a [kind of a place] when they realized that a man nearby had died from [a cause of death]. Do they need to wash once they leave?", 2, 9
KSA002009260221051, "[person1] accompanied a funerary procession. Does [person1] have to do netilat yadayim?", 2, 9
KSA002009260221052, "[person1] gives [person2] a haircut. Does [person1] need to wash their hands afterward?", 2, 9
KSA002009260221053, "[person1] takes off [something that you wear]. Do they need to wash their hands afterward?", 2, 9
KSA002009260221054, "[person1] touches their [body part]. Does [person1] have to wash their hands afterward?", 2, 9
KSA002009260221055, "[person1] was in [a room] with a dead body. Does [person1] have to do netilat yadayim?", 2, 9
KSA002009260221056, "[person2] is [doing activity] in [a place] and brushes off a [thing] louse from a [kind of thing]. Does [person2] have to do netilat yadayim afterward?", 2, 9
KSA002009260221057, "[person3] gives [person4] a haircut. Does [person4] need to wash their hands afterward?", 2, 9
KSA003001260221058, "Can [person] do [a strange action/activity]?", 3, 1
KSA003001260221059, "How does [person1] change clothing when they are alone versus when [person2] is in the [type of room] watching?", 3, 1
KSA003002260221060, "[person] lives in [country], where the non-jews in the government or in wealthy circles wear [type of fancy clothing]s to show their importance. Can [person] wear [type of fancy clothing] to make a good impression on [day of week]?", 3, 2
KSA003002260221061, "[person1] is cutting [person2]’s hair. Can [person2] ask [person1] to give them a haircut like [famous non-Jew]?", 3, 2
KSA003002260221062, "[person2] lives in [country2], where the non-jews wear [color] clothing but the Jews historically wear less ostentatious colors. Can [person2] wear [color] clothing?", 3, 2
KSA003002260221063, "[person3] lives in [country3], where the non-jews wear ornamental [type of weapon]s. Can [person3] wear ornamental [type of weapon]s to make a good impression as an honorable person?", 3, 2
KSA003003260221064, "[person1]’s [kind of clothing item] is [adjective/phrase, describing the way something could be dirty]. Can they wear the [kind of clothing item] while [doing an activity]?", 3, 3
KSA003004260221065, "[man] is tying his [kind of shoe2]s. Which [kind of shoe2] does he tie first?", 3, 4
KSA003004260221066, "[person] is putting on their [type of shoe]s. Which one does [person] put on first?", 3, 4
KSA003004260221067, "[person] is taking off their [kind of covering that goes on legs]. Which leg does the [kind of covering that goes on legs] come off of first?", 3, 4
KSA003004260221068, "[person1] is taking off their [clothing that is worn on the hands]. Which side will they take off first?", 3, 4
KSA003004260221069, "[person2] is taking off their [kind of shoe]s. Which [kind of shoe] do they take off first?", 3, 4
KSA003005260221070, "[person] has to put on [garment1]. [person] also has to put on [garment2] over [garment1]. Can [person] just put on [garment1] and [garment2] on top of it simultaneously?", 3, 5
KSA003005260221071, "Can [person2] put on their [article of clothing] and [garment1] simultaneously?", 3, 5
KSA003005260221072, "When [person] [verb: activity that involves undressing], they take off their socks. Can they put on both socks again simultaneously if they have to [verb: interesting activity]?", 3, 5
KSA003006260221073, "[man1]’s head is uncovered. Can he do [an activity of learning Torah]?", 3, 6
KSA003006260221074, "A [strange animal] grabs [man2]’s yarmulke and takes it away. Can [man2] say [a davar shebikedusha]?", 3, 6
KSA003006260221075, "Can [man] walk [number] [unit of length] in the [kind of place] with his head uncovered?", 3, 6
KSA003006260221076, "When [man] finishes [activity that involves undressing], can he wait until he [verb: interesting activity] to put on a hat?", 3, 6
KSA003006260221077, "When [man3] [does activity], does he need to wear his yarmulke?", 3, 6
KSA003007260221078, "[person] is on an errand to [verb: interesting activity]. What angle should [person] hold the head while walking?", 3, 7
KSA003008260221079, "[man1] and [man2] are walking along. Can they allow [woman1] to walk between them?", 3, 8
KSA003008260221080, "[man1] and [man2] are walking along. Can they allow a dog to walk between them?", 3, 8
KSA003008260221081, "[man1] and [man2] are walking along. Can they allow a pig to walk between them?", 3, 8
KSA003008260221082, "[man1] is walking. Can [man1] walk between two dogs?", 3, 8
KSA003008260221083, "[man2] is walking. Can [man2] walk between two pigs?", 3, 8
KSA003008260221084, "[man2] is walking. Can he walk between [woman1] and [woman2]?", 3, 8
KSA003008260221085, "[woman1] and [woman2] are walking along. Can they allow [man1] to walk between them?", 3, 8
KSA004001260221086, "How often should [a man] try to move his bowels?", 4, 1
KSA004001260221087, "If [person]’s bowels need relief but they are busy with [activity], can they wait until after [activity] to relieve themself?", 4, 1
KSA004001260221088, "If [person2]’s bladder needs relief but they are busy with [activity2], can they wait until after [activity2] to relieve themself?", 4, 1
KSA004002260221089, "[man] must urinate in [an open area]. What direction can he face?", 4, 2
KSA004002260221090, "[person] must defecate in [an open area] at [time of day]. What direction can they face?", 4, 2
KSA004002260221091, "[person1] must defecate in the middle of [an open kind of place]. Which direction can they face?", 4, 2
KSA004002260221092, "[person2] is in a [kind of building] in the [region of the world]. Which direction can they face to defecate?", 4, 2
KSA004002260221093, "[person2] must defecate on the edge of [an open area2] next to a wall. What direction can they face?", 4, 2
KSA004002260221094, "Can [person] defecate in [a public place] while a lot of Jewish people are there to [verb: interesting activity]?", 4, 2
KSA004002260221095, "Can [person] urinate in [a public place] while a lot of Jewish people are there to [verb: interesting activity2]?", 4, 2
KSA004002260221096, "Can [person2] defecate in [a public place2] while a lot of gentiles are there to [verb: interesting activity2]?", 4, 2
KSA004002260221097, "The [kind of professional] asks [person] to defecate in a [kind of container]. Can [person] do so while the [kind of professional] stands there watching?", 4, 2
KSA004004260221098, "[person2] is not sure how they should have dealt with [something important] according to halacha. Can [person2] think about this while [doing an activity] in the bathroom?", 4, 4
KSA004004260221099, "Can [person] think about [an idea from the Torah] in the bathroom?", 4, 4
KSA004004260427326, "Can [person] review [an area of Torah study] in the bathroom?", 4, 4
KSA004005260221100, "[man] has to wipe his anus with his bare hands after defecation. Which fingers can [man] use to wipe?", 4, 5
KSA004005260427327, "If [man] dpes not have anything he can use to clean himself after defecating, what body parts can he use?", 4, 5
KSA004006260221101, "[person] defecates just a tiny amount. Do they need to bless ‘asher yatzar’ afterward?", 4, 6
KSA004006260221102, "[person] went to the bathroom and forgot to bless ‘asher yatzar’. Later, they went to the bathroom again. How many times will they now say ‘asher yatzar’?", 4, 6
KSA004006260221103, "[person2] drinks a laxative and has to go to the bathroom. After they come out, they know they will probably have to go back into the bathroom very soon. Do they say ‘asher yatzar’?", 4, 6
KSA004006260221104, "[person2] urinates just a tiny drop. Do they need to bless ‘asher yatzar’ afterward?", 4, 6
KSA004006260427328, "[person] urinated, then [did an activity], then urinated again and remembered they forgot to say asher yatzar initially. How many times do they say asher yatzar?", 4, 6
KSA005002260221162, "[a large number] people urinate in an empty [something large for holding liquid]. How much water needs to be added to the [something large for holding liquid] to allow them to say [a prayer service] nearby?", 5, 2
KSA005002260221163, "[a large number] people urinated on the floor of the [kind of place where people play team sports games] during the [kind of sports] game. How much water is needed to nullify the urine so that they can say [a davar shebikedusha] after the game?", 5, 2
KSA005002260221164, "[person] has a [kind of container] full of urine. If [person] pours it into a [kind of container2] filled with water, can they say [a davar shebikedusha] nearby?", 5, 2
KSA005002260221165, "[person] has two [kind of container]s: one with water and one with urine. Each [kind of container] has [number] reviot of liquid. How can [person] combine the [kind of container]s to let them talk to [person2] to review halachos?", 5, 2
KSA005002260221166, "[person] is in a [kind of place] where someone left excrement. What do they need to do to think about [a davar kedusha]?", 5, 2
KSA005002260221167, "[person1] is in a [kind of place1] where [number] people urinated. What do they need to do to think about [a davar kedusha1]?", 5, 2
KSA005002260221168, "[person1] is in a [kind of place1] where a [kind of cloth item] is moist from urine. What do they need to do to think about [a davar kedusha2]?", 5, 2
KSA005002260221169, "[person1] is in a [kind of place1] where someone urinated into a [kind of liquid container] of water. What do they need to do to think about [a davar kedusha1]?", 5, 2
KSA005002260221170, "[person2] is in a [kind of place2] where someone left [a foul-smelling substance]. What do they need to do to think about [a davar kedusha2]?", 5, 2
KSA005002260221171, "[person2] is in a [kind of place2] where someone urinated into a [kind of liquid container2] designated for urination. What do they need to do to think about [a davar kedusha2]?", 5, 2
KSA005002260221172, "[person2] urinates onto the [something very dry and absorbent]. When [person2] finishes, the surface of the [something very dry and absorbent] is no longer damp. Can [person1] say [a davar kedusha2] nearby?", 5, 2
KSA005002260221173, "[person3] is in a [kind of place2] where the ground is moist from urine. What do they need to do to think about [a davar kedusha3]?", 5, 2
KSA005002260221174, "[person3] is in a [kind of place3] where someone urinated. What do they need to do to think about [a davar kedusha3]?", 5, 2
KSA005002260221175, "[person3] urinated in [a place]. How much water does he need to pour on the urine to say [a davar kedusha3] in [a place]?", 5, 2
KSA005002260221176, "If [person1] pours a reviit of water onto the urine in a [kind of container used for putting urine], can they say [a davar kedusha1] nearby?", 5, 2
KSA005002260221177, "If [person2] covers the feces in the [part of a house] with a [kind of covering], can they say [a davar kedusha2]?", 5, 2
KSA005002260221178, "The smell of the [something that smells bad] extends through the [kind of area]. Can [person1] think about [a davar kedusha1] there?", 5, 2
KSA005002260221179, "There is a toilet containing urine in the [kind of room]. How much water does [person3] need to add to let them say [a davar shebikedusha] there?", 5, 2
KSA005002260412108, "[a large number] people urinated in the [kind of room]. How much water is needed to nullify the urine so that everyone can say [a davar shebikedusha]?", 5, 2
KSA005002260412273, "[person] urinated in a [kind of container meant for holding urine/feces] and left it in the [kind of room]. How much water does [person2] need to add to it to nullify it so that [person2] can say [a davar torah]?", 5, 2
KSA005002260427329, "[person] is locked in a [kind of room] with feces. What do they need to do to say [a davar shebikedusha] in the [kind of room]?", 5, 2
KSA005002260427330, "[person] is [doing activity] in a [kind of room] and ends up urinating in the [kind of room]. What do they need to do to say [a davar shebikedusha] in the [kind of room] while [doing activity]?", 5, 2
KSA005002260427331, "In a strange turn of events, [number from one to ten] of [person]'s [Jewish holiday] guests are forced to urinate in [person]'s [kind of room] because the bathroom is inaccessible. After all [number from one to ten] of them urinate in a [kind of container] in the [kind of room], what do they have to do to keep using the room when it's time to say a beracha acharonah?", 5, 2
KSA005002260427332, "[person] has a [kind of container] that [person2] urinated in. How much water is needed in a second [kind of container] for the urine from the first [kind of container] to be nullified if it is poured in to the second [kind of container]?", 5, 2
KSA005002260427333, "[person2] pours a reviit of water in to a [kind of container designed for urine or feces] after someone urinated in it once. Can [person2] then say [a davar kedusha] nearby?", 5, 2
KSA005002260427334, "[person] urinates on a sponge, which absorbs the liquid. Can they learn [an area of Torah study] nearby?", 5, 2
KSA005003260221180, "[person] has a little excrement in the place where it comes out that is covered by their clothes. Can they say [a dvar kedusha]?", 5, 3
KSA005003260221181, "[person] has a little excrement on their [body part] that is covered by their clothes. Can they say [a dvar kedusha]?", 5, 3
KSA005003260412274, "[person1] accidentally gets feces smeared on the skin of their [body part]. What can [person1] do to say [a beracha] before they get home and shower?", 5, 3
KSA005003260427335, "[person] is davening [part of the tefillah]. Due to an accident, some feces lands on [person]'s neck. Can [person] continue davening?", 5, 3
KSA005004260221182, "[person] is in a clean [kind of room] and has to pray. There is a room with human waste on an upper floor. Can [person] pray?", 5, 4
KSA005004260221183, "[person1] is [doing activity] in [place1]. Do they need to check for urine or feces nearby before saying [a davar kedusha1]?", 5, 4
KSA005004260427336, "[person2] is in [a place that might have feces or urine] and wants to eat [a kind of food]. Do they need to check for urine or feces nearby before making a beracha?", 5, 4
KSA005005260221184, "[person] is [number] months old and produces excrement. Is their excrement a problem for [person2] to say [a davar shebikedusha]?", 5, 5
KSA005005260221185, "[person] is [number] months old and produces urine. Is their urine a problem for [person2] to say [a davar shebikedusha]?", 5, 5
KSA005005260412275, "[person4] urinated on the floor of the [kind of building]. They are [number from one to twenty] months old. Can [person1] keep learning nearby?", 5, 5
KSA005005260412276, "[person1] is [number from one to a hundd] weeks old. After [person1] defecates in [person2]'s [kind of room], can [person2] keep davening there?", 5, 5
KSA005005260427337, "Can [person] daven in a room with feces from a [number from one to ten]-month-old, if [person] is required to stay in the room?", 5, 5
KSA005005260427338, "A [number from one to ten2]-month-old defecated on the floor of the [kind of room]. Will [person2] daven nearby?", 5, 5
KSA005006260221186, "[person] finds a pile of weasel feces while [doing activity] in the [kind of place]. Can [person] say [a davar kedusha2] nearby without cleaning up the weasel feces?", 5, 6
KSA005006260221187, "[person] is by a pool of water used to soak cannabis. Can [person] say [a davar shebikedusha]?", 5, 6
KSA005006260221188, "[person1] is by a pool of water used to soak flax. Can [person1] say [a davar shebikedusha1]?", 5, 6
KSA005006260221189, "[person1] is in a place with a smelly, rotting [type of food]. Can [person] say [a davar shebikedusha1]?", 5, 6
KSA005006260221190, "[person1] is in a place with human excrement that doesn’t smell bad. Can [person1] say [a davar shebikedusha1]?", 5, 6
KSA005006260221191, "[person1] is in a place with turkey excrement that doesn’t smell bad. Can [person1] say [a davar shebikedusha1]?", 5, 6
KSA005006260221192, "[person2] finds an open [container] of [type of mammal] droppings under a [kind of furniture] in shul. Can [person2] daven nearby if the [type of mammal] droppings don’t smell?", 5, 6
KSA005006260221193, "[person2] is by a [type of body of water] and there is a bad smell. Can [person2] say [a davar shebikedusha2]?", 5, 6
KSA005006260221194, "[person2] is in a place with [animal commonly kept as a pet] excrement that doesn’t smell bad. Can [person2] say [a davar shebikedusha2]?", 5, 6
KSA005006260221195, "[person2] is in a place with a smelly [type of animal] carcass. Can [person2] say [a davar shebikedusha2]?", 5, 6
KSA005006260221196, "[person2] is in a place with cat excrement that doesn’t smell bad. Can [person2] say [a davar shebikedusha2]?", 5, 6
KSA005006260221197, "[person3] is in a chicken coop. Can [person3] say [a davar shebikedusha3]?", 5, 6
KSA005006260221198, "[person3] is in a place with [type of bird] excrement. Can [person3] say [a davar shebikedusha3]?", 5, 6
KSA005006260412277, "[person2] is learning [an area of Torah] while their friend [person3] chases turkeys. When one of the turkeys defecates, can they keep learning?", 5, 6
KSA005006260427339, "[person] is working at a [kind of place that many turkeys live]. Can they daven near the turkeys?", 5, 6
KSA005006260427340, "Can [person2] make a beracha on [kind of food] if there are [kind of animal] feces nearby?", 5, 6
KSA005006260427341, "[person]'s [kind of animal2] defecated in front of the [kind of building] and now it's smelly. Can [person] say [a davar kedusha] there?", 5, 6
KSA005006260427342, "Can [person2] tell [person3] about [an area of Torah study] if there's a rotting [kind of food] nearby?", 5, 6
KSA005006260427343, "Can [person4] and [person3] move inside the chicken coop to keep learning [an area of Torah study] to avoid [a problem] in the beis medrash?", 5, 6
KSA005006260427344, "[a nice park] is picturesque but currently smells bad. Can [person] sit nearby and review [an area of Torah study]?", 5, 6
KSA005006260427345, "[person4] puts a bunch of [hemp or flax] in a [kind of container] of water to sit. Can they learn [an area of Torah study] while they wait for it to finish soaking?", 5, 6
KSA005006260427352, "[person] opens their [kind of carrying bag for a meal] and finds feces of a [weird kind of animal]. Do they need to avoid the feces to make a beracha?", 5, 6
KSA005006260427353, "Can [person2] daven near a [kind of trash container] of smelly, rotting [kind of food]?", 5, 6
KSA005006260429373, "Does [person] need to check for [kind of animal] feces before saying [an area of Torah study] in a [kind of outdoor area] with a lot of [kind of animal]s?", 5, 6
KSA005006260429374, "can [person] learn [an area of Torah study2] near smelly [kind of animal2] feces?", 5, 6
KSA005006260429375, "Can [person2] daven in a [kind of room] that smells like a dead [kind of animal]?", 5, 6
KSA005007260221199, "[person] is in a room with a lot of excrement, and this excrement is frozen and very brittle and thus doesn’t smell. Can [person] say [a davar shebikedusha2]?", 5, 7
KSA005007260221200, "[person] is in a room with a lot of excrement, and this excrement is very dry and crumbly and doesn’t smell. Can [person] say [a davar shebikedusha]?", 5, 7
KSA005007260221201, "[person2] is in a [kind of place] with excrement that is covered by snow. Can [person2] say [a davar shebikedusha]?", 5, 7
KSA005007260221202, "[person2] is in a room with a lot of excrement, and this excrement is very dry and crumbly and smells bad. Can [person2] say [a davar shebikedusha2]?", 5, 7
KSA005007260427346, "[person] is [doing activity] in the [kind of room] and finds dry and powdery feces. Can they continue to say Tehilim chapters while [doing activity]?", 5, 7
KSA005007260427347, "[person3] has a [kind of container] that totally froze with feces in it. Do these still count as feces that [person3] needs to avoid?", 5, 7
KSA005007260427348, "[person] defecates in the [kind of outdoor area] on a snowy day. If they cover the feces with snow, can they say [a davar kedusha] nearby?", 5, 7
KSA005007260427354, "[person] has feces in the [kind of place] that are so dry that they crumble into dust if [person] kicks them. May [person] study [an area of Torah study] in their vicinity?", 5, 7
KSA005007260428355, "[person] takes some frozen feces out of the [kind of container] and wants to say [a beracha]. Does [person] need to cover the feces?", 5, 7
KSA005007260429376, "A group of feces are heated by [a heat source that makes things very hot] until they dehydrate. [person] finds that they are brittle and crumble if rolled. Can [person] use them for [a decorative purpose]?", 5, 7
KSA005007260429377, "[person] is in a [kind of outdoor hiding spot] on a winter day and learning [an area of Torah study]. After [person] defecates, can they keep learning if they cover the feces with snow?", 5, 7
KSA005008260221203, "There is excrement behind [person] and it doesn’t smell even up close. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
KSA005008260221204, "There is excrement behind [person], who doesn’t have a sense of smell. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
KSA005008260221205, "There is excrement in front of [person]. At night, how far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
KSA005008260221206, "There is excrement in front of [person]. During the day, how far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
KSA005008260221207, "There is excrement off to the side of [person]. How can [person] say [a davar kedusha] without going very far away?", 5, 8
KSA005008260221209, "There is smelly excrement behind [person]. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
KSA005008260323152, "There is excrement off to the side of [person]. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
KSA005008260427349, "How far does [person[ have to go from the turkey feces to daven?", 5, 8
KSA005008260427350, "[person2] can't smell the feces, but other people nearby can. How far does [person2] need to go away from them to bless for eating [a kind of food]?", 5, 8
KSA005008260427351, "A gathering of feces is located just [a cardinal direction] of [person]. If [person] continues facing [a cardinal direction], how far do they have to go fro mthe feces to study [an area of Torah study]?", 5, 8
KSA005008260428356, "[person] is in a dark [kind of place] with feces on the other end of the area. Where does [person] have to go to make a beracha on a [kind of food]?", 5, 8
KSA005008260429378, "How far from [person3]'s feces does [person] have to go to daven?", 5, 8
KSA005008260429379, "[person] has lost their sense of smell. How far does [person] need to keep away from smelly feces?", 5, 8
KSA005008260429380, "When [person] steps out of the [kind of building], they see feces further down the way. Can they say over [a davar shebikedusha]?", 5, 8
KSA005008260429381, "It is the middle of the night. [person2] defecated in the middle of a [kind of open area]. [person] is [number between ten and a hundred] feet away. If [person] wants to say [a davar shebikedusha], what direction can they face?", 5, 8
KSA005009260221210, "[person] is serving as a shaliach tzibur for a group of Jews’ tefilah in a [kind of room]. If excrement is found in the same [kind of room] but it is behind the shaliach tzibur and the smell doesn’t extend within four amot of the shaliach tzibur, then can they go ahead and daven?", 5, 9
KSA005009260428357, "Can [man] and his friends daven in a [kind of room] that contains feces?", 5, 9
KSA005010260221105, "[person1] was in [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, davened the 18 blessings, and afterward found excrement. Does [person1] need to repeat the 18 blessings?", 5, 10
KSA005010260221106, "[person1] was in [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said birkat hamazon, and afterward found excrement. Does [person1] repeat birkat hamazon?", 5, 10
KSA005010260221107, "[person1] was in [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said the Shema with its berachos, and afterward found excrement. Does [person1] repeat the berachos of the Shema?", 5, 10
KSA005010260221108, "[person1] was in [a place suitable to suspect that there was urine there], did not check whether there was urine present, davened the 18 blessings, and afterward found urine. Does [person1] need to repeat the 18 blessings?", 5, 10
KSA005010260221109, "[person1] was in [a place suitable to suspect that there was urine there], did not check whether there was urine present, said birkat hamazon, and afterward found urine. Does [person1] repeat birkat hamazon?", 5, 10
KSA005010260221110, "[person1] was in [a place suitable to suspect that there was urine there], did not check whether there was urine present, said the Shema, and afterward found urine. Does [person1] repeat the Shema?", 5, 10
KSA005010260221111, "[person1] was in a [kind of place], did not check whether there was excrement present, davened the 18 blessings, and afterward found excrement. Does [person1] need to repeat the 18 blessings?", 5, 10
KSA005010260221112, "[person1] was in a [kind of place], did not check whether there was excrement present, said birkat hamazon, and afterward found excrement. Does [person1] repeat birkat hamazon?", 5, 10
KSA005010260221113, "[person1] was in a [kind of place], did not check whether there was excrement present, said the Shema with its berachos, and afterward found excrement. Does [person1] repeat the berachos of the Shema?", 5, 10
KSA005010260221114, "[person2] was in a [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said [a beracha], and afterward found excrement. Does [person2] repeat [a beracha]?", 5, 10
KSA005010260221115, "[person2] was in a [a place suitable to suspect that there was excrement there2], did not check whether there was excrement present, said the Shema, and afterward found excrement. Does [person2] repeat the Shema?", 5, 10
KSA005010260221116, "[person2] was in a [a place suitable to suspect that there was urine there], did not check whether there was urine present, said the Shema with its berachos, and afterward found urine. Does [person2] repeat the berachos of the Shema?", 5, 10
KSA005010260221117, "[person2] was in a [kind of place2], did not check whether there was excrement present, said the Shema, and afterward found excrement. Does [person2] repeat the Shema?", 5, 10
KSA005010260428358, "[person2] davened in a [kind of place that often has feces] and then realized that there had been feces there all along that [person2] hadn't noticed. Do they need to daven again?", 5, 10
KSA005010260428359, "[man] said keriyat shema in a [kind of place that often has feces2] and then realized that there had been feces there all along that [man] hadn't noticed. Does he need to say keriyat shema with its berachos again?", 5, 10
KSA005010260428360, "[man] said keriyat shema in a [kind of place where feces wouldn't be found usually] and then found feces nearby. Will he repeat keriyat shema?", 5, 10
KSA005010260428361, "[person] davened in a [kind of place where urine is often found] and then found urine nearby. Will they daven again?", 5, 10
KSA005010260428362, "[man] said shema in a [kind of place where urine is often found2] and then found urine in a puddle. Will he say shema again?", 5, 10
KSA005010260429382, "[person] was in a [place that could have feces] and said [a beracha or set of berachos] and afterward found feces nearby. Does [person] need to  say [a beracha or set of berachos] again?", 5, 10
KSA005010260429383, "[man] said shema in [a place where feces wouldn't be found] and then found feces nearby. Will he repeat the shema?", 5, 10
KSA005010260429384, "[person] davened in [a place where urine could be found] and then found urine nearby. Does [person] daven again?", 5, 10
KSA005011260221118, "A smell left [person1] from below. Can [person1] learn [an area of torah learning]?", 5, 11
KSA005011260221119, "A smell left [person1] from below. Can [person1] say [a davar shebikedusha]?", 5, 11
KSA005011260221120, "A smell left [person1] from below. Can [person2] say [a davar shebikedusha] nearby?", 5, 11
KSA005011260221121, "A smell left [person1] from below. Can [person2] study [an area of torah learning] nearby?", 5, 11
KSA005011260428363, "[person3] farted. Can they say [a davar shebikedusha]?", 5, 11
KSA005011260428364, "Once [person] farted, can [person3] say [a beracha]?", 5, 11
KSA005011260428365, "Once [person] farted, can [person3] say [divrei Torah]?", 5, 11
KSA005012260221122, "[person] wants to say [a davar kedusha] and is right next to a [kind of bathroom] where [person2] is doing their thing. What does [person] need to do?", 5, 12
KSA005012260221123, "[person] wants to say [a davar kedusha] and is right next to an empty [kind of bathroom] that is free of excrement. What does [person] need to do?", 5, 12
KSA005012260221124, "[person1] has a favorite [kind of chair] that they like to sit on while they do their [activity done sitting]. If you lift up a special cushion, this [kind of chair] has a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person1] is sitting on the chair and releases excrement into the hole. Then [person1] finishes, takes the [kind of container] out of the room, covers the hole in the [kind of chair] with the cushion, and sits back down. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 5, 12
KSA005012260221125, "[person4] has a favorite chair that they like to sit on while they do their [activity done sitting3]. This is a [kind of chair2] with a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person4] is sitting on the chair and releases excrement into the hole. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 5, 12
KSA005012260221126, "[person3] has a favorite [kind of chair2] that they like to sit on while they do their [activity done sitting2]. If you lift up a special cushion, this [kind of chair2] has a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person3] is sitting on the chair and releases excrement into the hole. Then [person3] finishes, covers the hole in the [kind of chair2] with the cushion, and sits back down. [person2] is nearby and wants to say [a davar kedusha2]. What should [person2] do?", 5, 12
KSA005012260221127, "There is a special toilet, which is a [kind of chair3] with a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person1] is sitting on the chair and releases excrement into the hole into the [kind of container]. [person1] finishes, takes out the [kind of container], covers the hole in the [kind of chair3], and leaves. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 5, 12
KSA005012260221128, "There is a special toilet, which is a [kind of chair2] with a hole in the middle. A [kind of container2] fits into a slot beneath the hole. [person3] is sitting on the chair and releases excrement into the hole into the [kind of container2]. [person3] finishes, takes out the [kind of container2], and leaves. [person2] is nearby and wants to say [a davar kedusha2]. What should [person2] do?", 5, 12
KSA005012260429385, "[person] has a special toilet built as a [kind of chair]. A [kind of cover placed over the seat of a chair] is placed over the top when it is not being used. The basin of the toilet can be taken away. When the toilet is covered by its lid, can [person2] say [a davar shebikedusha] nearby?", 5, 12
KSA005013260221129, "[person1] has a [type of container] made of [glass] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t smell bad. Can [person1] say [a davar kedusha] near this [type of container]?", 5, 13
KSA005013260221130, "[person1] has a [type of container] made of glass and designated for putting [excrement or urine]. The [type of container] is clean but still a little bit smelly. Can [person1] say [a davar kedusha2] near this [type of container]?", 5, 13
KSA005013260221131, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. Is this considered halachically the same as an outhouse?", 5, 13
KSA005013260221132, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t have a bad smell. The [type of container] is full of clean water. Is this [type of container] considered something that needs to be avoided to say [a davar kedusha]?", 5, 13
KSA005013260221133, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t have a bad smell. The [type of container] is turned upside down. Is this [type of container] considered something that needs to be avoided to say [a davar kedusha]?", 5, 13
KSA005013260221134, "[person1] has a [type of container3] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container3] is in a room with [person1]. What does [person1] need to do with the [type of container3] to say [a davar kedusha2]?", 5, 13
KSA005013260221135, "[person1] owns a pig named [name for a farm animal]. [name for a farm animal] has been diving in the water of the river and is now sticking their head out of the water. They are very clean. How does the halachic status of [name for a farm animal]’s mouth compare to the halachic status of a [type of container] used to put excrement?", 5, 13
KSA005013260221136, "[person1] owns a pig named [name for a farm animal]. Can [person2] say [a davar shebikedusha3] while in a [kind of place] with [name for a farm animal]?", 5, 13
KSA005013260221137, "[person2] has a [type of container] made of [glass or a type of metal] and designated for putting [excrement or urine]. The [type of container] is a bit dirty. Can [person2] say [a davar kedusha] near this [type of container]?", 5, 13
KSA005013260221138, "[person2] has a [type of container2] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container2] is clean and doesn’t have a bad smell. Is this [type of container2] considered halachically the same as an outhouse?", 5, 13
KSA005013260221139, "[person2] is hired to help wash a pig named [name for a farm animal]. When the pig is clean, can [person2] sing [a Jewish song]?", 5, 13
KSA005013260415181, "[person1] has a [type of container] made of [a type of metal] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t smell bad. Can [person1] say [a davar kedusha] near this [type of container]?", 5, 13
KSA005013260415183, "[person1] has a [type of container] made of [a type of metal] and designated for putting [excrement or urine]. The [type of container] is clean but still a little bit smelly. Can [person1] say [a davar kedusha2] near this [type of container]?", 5, 13
KSA005014260221140, "Can [person] say [a common Jewish greeting] to [person1] in a dirty [kind of place]?", 5, 14
KSA005014260221141, "Can [person] think about [a davar kedusha] in a room where people bathe?", 5, 14
KSA005014260428366, "[man] and [man2] are in a bathhouse. May [man] say [divrei Torah2]?", 5, 14
KSA005014260428367, "[man] and [man3] are in a bathhouse. In the course of conversation, can [man] say [a common expression that includes the word 'Hashem']?", 5, 14
KSA005014260429386, "Can [person] say shalom to [person3] in the bathroom?", 5, 14
KSA005015260221142, "Can [person] say [a davar shebikedusha] while wearing a [a kind of garment] and nothing else?", 5, 15
KSA005015260221143, "Can [person] say [a davar shebikedusha] while young [person1] is bathing nearby?", 5, 15
KSA005015260221144, "Can [person1] say [a davar shebikedusha1] while facing [a kind of erva] if [person1] closes their eyes?", 5, 15
KSA005015260221145, "Does [man] have to look away from baby [man2] while making the berachas of milah?", 5, 15
KSA005015260221146, "Can [person] say [a davar Torah] in front of [person2], who is wearing a [kind of garment] and nothing else?", 5, 15
KSA005015260422303, "If [person1] is on [a surface that one can stand on] and [person2] is there [doing something] completely nude, can [person1] say a beracha on [something you can say a beracha on]?", 5, 15
KSA005015260428368, "Can [man] speak about [an area of Torah] while facing [number from thirteen to thirty]-year-old [person]'s exposed [body part]?", 5, 15
KSA005015260428369, "Can [man] speak about [an area of Torah2] while facing [number from one to eleven]-year-old [person2]'s exposed [body part2]?", 5, 15
KSA005015260428370, "Can [person] speak about [an area in Torah] while their [body part3] is exposed?", 5, 15
KSA005015260428371, "Can [person2] daven for [something the world needs] while facing a naked [number from one to eleven]-year-old?", 5, 15
KSA005015260428372, "Can [person3] make a beracha on [something that one says a beracha on] if they turn away from [number from one to eleven]-year-old [person4], whose [body part2] is exposed?", 5, 15
KSA005016260221147, "[man] cannot say [a davar shebikedusha] in front of [woman] because [woman]’s [body part normally covered] is exposed. Does [woman]’s husband [man2] also have to wait to cover this to say [a davar shebikedusha]?", 5, 16
KSA005016260221148, "[man] hears [woman1] singing. [man] is learning [a davar Torah]. If he cannot make [woman1] stop singing and cannot go anywhere else, is he allowed to learn [a davar Torah] where he can hear [woman1] singing?", 5, 16
KSA005016260221149, "[man1] hears [woman] singing. [man1] has to say Shema. If he cannot make [woman] stop singing and cannot go anywhere else, is he allowed to say Shema where he can hear [woman] singing?", 5, 16
KSA005016260221150, "[man1] hears [woman1] singing. [man1] has to say tefillah. If he cannot make [woman1] stop singing and cannot go anywhere else, is he allowed to say tefillah where he can hear [woman1] singing?", 5, 16
KSA005016260221151, "[woman]’s [article of clothing] has a hole of diameter [number] inches. Is this considered erva to [man]?", 5, 16
KSA005016260221152, "[woman1] is married and usually covers her entire hair with a [head covering]. Can [woman2] talk about [a davar shebikedusha] with [woman1] while [woman1]’s hair is totally exposed?", 5, 16
KSA005016260221153, "A tefach is revealed of Mrs. [last name]'s [a body part that women normally cover]. Is this considered erva to Mr. [last name]?", 5, 16
KSA005016260221154, "A tefach is revealed of Mrs. [last name2]'s [a body part that women normally cover]. Is this considered erva to Mr. [last name]?", 5, 16
KSA005016260422304, "[lady] has an exposed area of her [body region] [number from one to five] inches in length. Is this considered erva to [man1]?", 5, 16
KSA005016260422305, "[lady] has an exposed area on her [body part]. Can [lady]'s husband [man] say [a davar kedusha] while facing [lady]?", 5, 16
KSA005016260422306, "[lady]'s hair is uncovered. Can [lady1] say a beracha on [something that you can say a beracha on] while facing [lady]?", 5, 16
KSA005016260429387, "[woman]'s hair is not covered. Can her husband [man5] say [a beracha] while facing her?", 5, 16
KSA005017260221155, "[man] is wearing a [type of garment that covers the whole body]. Can [man] say [a davar shebikedusha]?", 5, 17
KSA005017260221156, "[man] is wearing a belt around his waistline underneath [a kind of garment that covers the whole body]. Can [man] say [a davar shebikedusha3]?", 5, 17
KSA005017260221157, "[man1] is wearing a robe and presses his robe against his body all the way around his waistline using his arms. Can [man1] say [a davar shebikedusha]?", 5, 17
KSA005017260221158, "[man2] is wearing a belt around his waistline on top of a [a kind of garment that covers the whole body2]. Can [man2] say [a davar shebikedusha]?", 5, 17
KSA005017260221159, "Can [man] say [a davar shebikedusha] if he is naked in bed?", 5, 17
KSA005017260221160, "Can [man1] say [a davar shebikedusha3] if he is only wearing a robe without a belt?", 5, 17
KSA005017260221161, "Can [woman] say [a davar shebikedusha2] if she is only wearing a robe without a belt?", 5, 17
KSA005017260422307, "[man] is wearing a sheet wrapped around his body like a [kind of clothing that is basically just a big sheet]. He has no other clothes on. What does he have to do to say [a davar kedusha]?", 5, 17
KSA005017260422308, "[lady] is wearing a sheet wrapped around her body like a [kind of clothing that is basically just a big sheet]. She has no other clothes on. What does she have to do to say [a davar kedusha]?", 5, 17
KSA006001260221211, "After eating [a meal], what kind of plan does [person] need to make before they start to make the beracha?", 6, 1
KSA006001260221212, "Can [person] bless [a beracha that a person says to hashem] while doing [action that a person has to take in daily life]?", 6, 1
KSA006001260221213, "Can [person] say [a beracha after eating food] while doing [an activity done to clean off after a meal]?", 6, 1
KSA006001260221214, "How loudly does [person2] generally say the beracha [a beracha]?", 6, 1
KSA006001260221215, "If [person1] is saying [a series of berachas] by rote and doesn’t know exactly what beracha they are up to after saying “baruch atah,” should they just keep going?", 6, 1
KSA006001260221216, "When [person2] blesses [a beracha that a person says to hashem2] in daily life, how loud do they generally speak?", 6, 1
KSA006001260422309, "Before [person] starts to say [a beracha for hashem], what will [person ] be sure to know about what they are going to say?", 6, 1
KSA006001260422310, "Can [person1] [do something] while saying the beracha [the name of a beracha]?", 6, 1
KSA006001260422311, "How loudly will [person] bless [the name of a beracha]?", 6, 1
KSA006001260501388, "Does [person] need to know exactly what beracha they are about to say before they make [a beracha]?", 6, 1
KSA006001260501389, "Can [person] [do a household task] while saying [a beracha]?", 6, 1
KSA006001260501390, "Can [person3] [do a mitzvah] while they say [a beracha]?", 6, 1
KSA006002260221217, "[person] has [something that goes in a person's mouth] in their mouth. Can [person] say [a beracha]?", 6, 2
KSA006002260221218, "[person] has saliva in their mouth. Can [person] say [a beracha]?", 6, 2
KSA006002260421280, "[person] is eating [kind of food]. While they still have some [kind of food] left in their mouth, can they grab [kind of food2] and start saying a beracha on it?", 6, 2
KSA006002260421281, "[person2] is about to eat some [kind of food3] and is so excited that their mouth salivates a lot. Can they say the beracha with this extra saliva in their mouth?", 6, 2
KSA006002260422312, "[person] is chewing on [something that a person puts in their mouth]. Does [person] need to take the [something that a person puts in their mouth] out of their mouth to make a new beracha on [something that you can make a beracha on]?", 6, 2
KSA006002260501391, "May [person4] say [a beracha] while their [kind of dental equipment worn in the mouth] is in their mouth?", 6, 2
KSA006002260501392, "Can [person2] say [a beracha] with a [small item] in their mouth?", 6, 2
KSA006002260501393, "Can [person5] say [a beracha on eating] with a lot of extra saliva in his mouth?", 6, 2
KSA006003260221219, "[person] is with their friend [person2] and making jokes. Can [person] make a beracha on [a kind of beverage] while in a completely silly mood?", 6, 3
KSA006003260221220, "Can [person] say that [person1] shouldn’t be blessed with [a good thing that a person wants in their life]?", 6, 3
KSA006003260221221, "Can [person1] refer to and say [a name of Hashem] over and over for fun?", 6, 3
KSA006003260221222, "Can [person2] write the word [a word for Hashem in any language]?", 6, 3
KSA006003260421282, "[person1] dislikes [person2]. Can they curse them?", 6, 3
KSA006003260421283, "[person] has a lot of extra saliva building up during davening. Can they spit it out after saying [a pasuk in davening with Hashem's name]?", 6, 3
KSA006003260421284, "Can [person] say "adoshem" instead of a-d-n-y when saying [a song or phrase with the word hashem written out]?", 6, 3
KSA006003260422313, "Can [person] engage in a theoretical comparison of Hashem with [a type of thing] to help them with their [kind of personal goal or interest]?", 6, 3
KSA006003260422314, "Is [person1] allowed to say that H' shouldn't bless [person3] with [something that people usually want]?", 6, 3
KSA006003260422315, "Can [person] write [write a euphemism for a name of hashem like tzevakos here instead of an actual name of hashem] on a [writing surface] in a [kind of place]?", 6, 3
KSA006003260501394, "Can [person] say to [person2] to thank G' for how nice the weather is?", 6, 3
KSA006003260501395, "Can [famous politician] say that G' wants [a country] to [verb: a military action] [a country2]?", 6, 3
KSA006003260501396, "Can [person2] say a halachically-required beracha to Hashem for [doing an activity]?", 6, 3
KSA006003260501397, "Can [person3] mention G' while learning [an area of Torah study]?", 6, 3
KSA006003260501398, "Can [person4] invoke G' in the course of discussing G's role in [a period of Jewish history]?", 6, 3
KSA006003260501399, "Can a person write out "we should [do activity] G'-willing" in a [kind of physical written document]?", 6, 3
KSA006004260223223, "[person] starts saying a [name of a beracha rishonah on food] on some [type of food] when they realize that they already made the right beracha. If they realize after saying "baruch atah hashem," what will they do?", 6, 4
KSA006004260223224, "[person1] starts blessing [the name of a beracha] when they realize that they're not required to say this beracha. If they realize after saying "baruch atah hashem elokei," what will they do?", 6, 4
KSA006004260223225, "[person] started to say the beracha of [the name of a beracha1] while [doing activity] but caught themselves and said "lamdeni chukecha" to make it a pasuk. What else do they need to say?", 6, 4
KSA006004260223226, "[person] started to say the beracha of [the name of a beracha] while [doing activity] but caught themselves and said "yisrael avinu meolam vead olam" to make it a pasuk. What else do they need to say?", 6, 4
KSA006004260421285, "[person1] already said [a beracha1]. They forget and start saying again "Baruch atah H'". What will they do if they remember now?", 6, 4
KSA006004260421286, "[person2] starts saying "Baruch atah H' elokei" and then realizes they don't need to make [the name of a beracha]. What will they do?", 6, 4
KSA006005260223227, "In [person]'s community, the custom is to pour out all water in the vicinity of a dead body. [person] made a beracha on a glass of water and then, before they started drinking, heard that a dead body was nearby. What will they do?", 6, 5
KSA006006260421287, "[man] just finished shacharit and realized he isn't sure if he said [a beracha from birchot hashachar]. Wil he say the beracha now?", 6, 6
KSA006006260421288, "[person] isn't sure whether or not they already said [a beracha that a person is required to say]. Will they say the beracha just in case?", 6, 6
KSA006006260422316, "[person] realizes at [time of day] that they aren't sure if they said [a beracha that a person is obligated to say every day]. Will they go bakc and say the beracha?", 6, 6
KSA006006260501400, "[person2] ate [kind of food] for [a meal] and isn't sure if they said the after-beracha yet. Should they make the beracha now?", 6, 6
KSA006006260501401, "[person3] isn't sure if they said [a beracha that one must say every day]. Should they go back and say it?", 6, 6
KSA006007260317271, "How many berachos is [man1] obligated to say on [name of a day]?", 6, 7
KSA006008260223228, "When [person] is blessing [the name of a beracha] and [person2] hears them say "Baruch atah Hashem," what does [person2] say?", 6, 8
KSA006008260223229, "When [person] blesses [the name of a series of berachas like birkat hamazon or birchot hashachar], what does [person2] say as soon as [person] says each beracha?", 6, 8
KSA006008260421289, "When [person1] hears [person2] say "baruch atah H" of [name of a beracha], what does [person1] say?", 6, 8
KSA006008260421290, "[person1] is saying [a beracha]. What will [person2] do when they hear [person1] finish saying [a beracha]?", 6, 8
KSA006008260422317, "[person] says a beracha "[the name of a beracha]" and [person2] hears. Can [person2] skip answering Amen?", 6, 8
KSA006009260223230, "If [person] is saying [the name of a beracha] for themselves and for [person2], will [person2] say "baruch hu uvaruch shemo"?", 6, 9
KSA006009260421291, "[person1] is in the middle of [something that is forbidden to interrupt] and hears [person2] make [a beracha]. When [person2] gets to "baruch atah hashem" of the beracha, what will [person1] say?", 6, 9
KSA006009260421292, "[person1] and [person2] both need to say [a beracha], but [person1] doesn't know the words, so [person2] says [a beracha] for both of them. When [person2] says "Baruch atah H", what will [person1] say?", 6, 9
KSA006009260422318, "[person] is involved in [a situation where a person halachically isn't supposed to interrupt to speak] and hears [person2] making a beracha [name of a beracha]. What will [person] say after [person2] says "Baruch atah H'", considering that [person] is still involved in [a situation where a person halachically isn't supposed to interrupt to speak]?", 6, 9
KSA006009260422319, "[person] is saying the beracha [the name of a beracha] for [person2]. After [person] says "baruch atah H'", what will [person2] answer?", 6, 9
KSA006009260501402, "[person2] is blessing [a beracha] on behalf of [person3]. Does [person3] say "Baruch hu uvaruch shemo" after [person2] says "Baruch atah H'"?", 6, 9
KSA006010260223231, "[person] listens to [person1] saying [the name of a beracha]. How long does [person] need to wait to start saying amen?", 6, 10
KSA006010260223232, "[person] blesses [the name of a beracha] very quietly. How quietly does [person2] say amen?", 6, 10
KSA006010260421293, "When [person] says [a beracha1], can [person1] answer amen before [person] finishes the last word?", 6, 10
KSA006010260421294, "[person3] blesses [a beracha] at [a loudness level of talking] after [a shul event]. How loudly can [person2] answer amen?", 6, 10
KSA006011260223233, "[person] says [the name of a beracha]. When they finish, do they answer amen?", 6, 11
KSA006011260223234, "[person] and [person1] both finish saying [the name of a beracha] simultaneously. Can they answer amen to one another's berachos?", 6, 11
KSA006011260223235, "[person] finishes saying [the name of a beracha1] at the same moment that [person1] finishes saying [the name of a beracha]. Can they answer amen to one another's berachos?", 6, 11
KSA006011260223236, "[person] and [person1] both finish saying the beracha of yishtabach simultaneously. Can they answer amen to one another's berachos?", 6, 11
KSA006011260421295, "After [person2] says [a beracha1], can they answer amen?", 6, 11
KSA006011260421296, "[person1] and [person2] both say [a beracha from davening] in unison. When they finish [a beracha from davening], can they answer amen to one another?", 6, 11
KSA006011260421297, "At maariv, [person2] and [person3] both hear one another finish saying the beracha shomer amo yisrael laad simultaneously. May they answer amen to one another?", 6, 11
KSA006011260422320, "[person1] blesses [the name of a beracha] just as [person2] blesses [the name of a beracha2]. Can they answer amen to one another?", 6, 11
KSA006011260422321, "[person1] blesses [the name of a beracha] just as [person2] blesses [the name of a beracha]. Can they answer amen to one another?", 6, 11
KSA006011260422322, "[person] and [person3] both finish the beracha at the end of hallel simultaneously. Can they answer amen to one another?", 6, 11
KSA007001260223237, "[person] is saying birchot haTorah while standing near [person1]. Can [person] say the entire set of berachas loudly?", 7, 1
KSA007001260421298, "[person1] is saying birchot haTorah out loud. Can they say the entire thing loudly if [person2] is nearby?", 7, 1
KSA007001260422323, "Can [person] say the entire birchot hatorah out loud in front of [person2]?", 7, 1
KSA007002260223238, "If [person2] wakes up at [time in the early morning], can they say all of birchos hashachar?", 7, 2
KSA007002260421299, "Can [man1] bless "hanoten lasechvi vinah" at [time in the early morning]?", 7, 2
KSA007002260422324, "When is the earliest time that [person] can bless "hanoten lasechvi vinah"?", 7, 2
KSA007002260501403, "When [person] wakes up at [time in the early morning before dawn], can they say all of birchos hashachar?", 7, 2
KSA007002260501404, "When [person] wakes up at [time in the early morning after dawn], can they say all of birchos hashachar?", 7, 2
KSA007003260221223, "[person] is blind. Will [person] still say the beracha "pokeach ivrim"?", 7, 3
KSA007003260221224, "After making the beracha "matir asurim," [person] realizes they have not yet blessed "zokef kefufim." Can they make that beracha?", 7, 3
KSA007003260221225, "After making the beracha "zokef kefufim," [person] realizes they have not yet blessed "matir asurim." Can they make that beracha?", 7, 3
KSA007003260221226, "After making the beracha "[one of birchos hashachar]," [person] realizes they have not yet blessed "matir asurim." Can they make that beracha?", 7, 3
KSA007003260421300, "[person4] is blind. What beracha does [person4] say for "pokeach ivrim"?", 7, 3
KSA007003260421301, "Can [person5] say all of birchot hashachar backwards?", 7, 3
KSA007004260221227, "After [person] says "hamaavir shenah meeinai utenumah meafapai," does [person2] answer "amen"?", 7, 4
KSA007004260422325, "Does [person2] need to answer amen after [person3] says "hamaavir shenah meeinai utenumah meafapai"?", 7, 4
KSA007005260221228, "[person] stays up all night [doing activity]. Can they make the beracha "al netilat yadayim" in the morning before shacharit?", 7, 5
KSA007005260221229, "[person2] stays up all night [doing activity2]. Can they make all the berachas of birchos hashachar on their own in the morning?", 7, 5
KSA007005260421302, "[person] stays up all night [doing activity1]. Can they make the beracha "al netilat yadayim" before shacharit?", 7, 5
KSA007005260501409, "[man] stays up all night [doing activity]. In the morning, which berachas will he ask [man2] to say for him?", 7, 5
KSA007006260221230, "[person] doesn't bless "al netilat yadayim" before shacharit. Will they bless "al netilat yadayim" after shacharit?", 7, 6
KSA007006260501410, "[man] forgets to bless "elokai neshamah" before shacharit. How long can he say it afterward?", 7, 6
KSA007006260501411, "[man] forgets to bless "al netilat yadayim" before shacharit. How long can he say it afterward?", 7, 6
KSA007007260221231, "[person] is running late. Can they skip birchot haTorah until after shacharit?", 7, 7
KSA007007260221232, "[man1] forgot to say birchot haTorah. What does he need to do right after shemoneh esreh of shacharit?", 7, 7
KSA007007260221233, "[man] realizes after shacharit that he forgot to say birchot haTorah. Will he say them now?", 7, 7
KSA007007260501412, "[man2] doesn't say birchot haTorah before shacharit. How long does he have to say it after shacharit?", 7, 7
KSA007007260501413, "Can [man] wait to say birchot haTorah until after shacharit?", 7, 7
KSA007007260501414, "[man] forgot to say birchot haTorah before shacharit. What will he do now?", 7, 7
KSA007007260501415, "[man] didn't say birchot haTorah yet. Should he say them before mincha?", 7, 7
KSA007008260221234, "[man2] arrives at shul and is called up for an aliya before he's said birchot haTorah. After the aliyah, how will he make birchot haTorah?", 7, 8
KSA007008260501416, "[man] forgets to say birchot haTorah. He is called up to an aliyah. When he says birchot haTorah later, does he say it normally?", 7, 8
KSA008001260221235, "After [man] wakes up at [a time in the morning], can he start working on [a chore or assignment that a person has to do]?", 8, 1
KSA008001260221236, "Can [man1] leave to start travelling to [a faraway place] at [a time in the morning]?", 8, 1
KSA008001260501405, "[man3] wakes up at [time in the early morning just after dawn]. Can he work on [a personal project] before shacharit?", 8, 1
KSA008001260501406, "[man2] wakes up after dawn. Can he deal with [a household chore] before he goes to daven shacharit?", 8, 1
KSA008001260501407, "[man] wakes up on [day of the week] at sunrise. Since he wants to visit [a tourist attraction], can he start travelling there and daven at a shul on the way?", 8, 1
KSA008001260501408, "[man3] wakes up. Can he start travelling to [a town or province2] before shacharit?", 8, 1
KSA008001260501417, "[man] is going on a trip to [a state or province]. Can he start travelling at [a time in the early morning] to get there?", 8, 1
KSA008002260221237, "Can [man] eat [a kind of food] at [a time in the morning] before saying shacharit?", 8, 2
KSA008002260221238, "Can [man] have [coffee or tea] with [sugar or milk] at [time in the morning] before saying shacharit?", 8, 2
KSA008002260221239, "[man1] does not feel well and cannot wait until after saying shacharit at shul to have [coffee or tea] with [sugar or milk]. Can he have some before he goes to shul and davens?", 8, 2
KSA008002260221240, "[man1] does not feel well and cannot wait until after saying shacharit at shul to eat [a kind of food]. Can he have some before he goes to shul and davens?", 8, 2
KSA008002260501418, "[man] is awake a bit after dawn. May he eat a [kind of food]?", 8, 2
KSA008002260501419, "[man2] is not feeling well. Is it better ofr him to have [a kind of sugary drink] and then go to shul, or to daven on his own?", 8, 2
KSA008002260501420, "Can [man] drink a glass of [a sugary drink] before shacharit?", 8, 2
KSA008002260501421, "[man] wakes up and is seriously ill. Can he eat [a kind of food2]?", 8, 2
KSA008002260504438, "[man] wakes up at [a time in the early morning around dawn]. Can he have some [kind of food]?", 8, 2
KSA008003260221241, "[man] wakes up at [a time in the early morning before dawn]. Can he have some [kind of food]?", 8, 3
KSA008003260501422, "[man] wakes up considerably before dawn. Can he eat a [kind of snacky food] while he does [a relaxing activity]?", 8, 3
KSA008004260221242, "May [man] drink [water, coffee, or tea] at [a time in the morning] before shacharit?", 8, 4
KSA008004260221243, "May [man] drink [water, coffee, or tea] on Shabbos morning before shacharit?", 8, 4
KSA008004260501423, "May [man] drink plain coffee when he wakes up?", 8, 4
KSA008004260501424, "May [man] drink plain water when he wakes up?", 8, 4
KSA008004260501425, "May [man] drink plain tea when he wakes up?", 8, 4
KSA008004260501426, "Is it better for [man] to drink [a sugary drink2] before shul on [a day with kiddush] morning or to pray shacharit on his own?", 8, 4
KSA008005260221244, "When [man] runs into [person] in the morning on his way to shacharit, can he greet them?", 8, 5
KSA008005260221245, "When [man] sees [person2] in the morning on his way to shacharit, can he approach them to greet them?", 8, 5
KSA008005260503427, "[man] runs into [person2] in the morning before shacharit. Can he say hello?", 8, 5
KSA008005260503428, "[man] passes [person] while walking to shacharit. Can he approach to say hello?", 8, 5
KSA008005260503429, "Can [man] say [an abnormal greeting] to [person2] when he runs into them in the morning before shacharit?", 8, 5
KSA008005260503430, "Can [man] say [a normal greeting] to [person] when he runs into them in the morning before shacharit?", 8, 5
KSA008005260504439, "Can [man] stop by [man2]'s house to see if he's home and say hello on the way to shacharit?", 8, 5
KSA008005260504440, "Can [man] reply to [person]'s [kind of electronic message] when he wakes up before shacharit?", 8, 5
KSA008005260504441, "When [man] runs into [person] before shacharit, what greeting should he use to greet them?", 8, 5
KSA008006260221246, "[man1] wakes up at [time in the morning]. Can he learn [an area of Torah] and then daven shacharit on his own?", 8, 6
KSA008006260221247, "[man1] wakes up at [time in the morning]. Can he study [an area of Torah] before heading to his normal minyan at shul?", 8, 6
KSA008006260221248, "If the only shiur on [an area of Torah] is at [time in the morning], can [man] go straight to the shiur after waking up and then daven shacharit on his own afterward?", 8, 6
KSA008006260503431, "Can [man] study [an area of Torah study] in the morning before shacharit?", 8, 6
KSA008006260503432, "If [man2] doesn't habitually daven shacharit with a certain minyan, can he go to a shiur covering [an area of Torah study] before davening shacharit?", 8, 6
KSA008006260504442, "[man] doesn't consistently daven with a minyan for shacharit. Can he study [an area of Torah study] in the morning before going to the [a normal hour for shacharit] shacharit?", 8, 6
KSA008006260504443, "[man2] consistently davens with a minyan for shacharit. Can he study [an area of Torah study2] in the morning before going to the [a normal hour for shacharit] shacharit?", 8, 6
KSA008006260504444, "[man] wakes up at [a normal hour for shacharit] on [day of the week]. There is a shiur 30 minutes later that he could attend before davening on his own, and a shiur another 20 minutes after that he could attend after davening on his own. Which one will he attend?", 8, 6
KSA009001260221249, "Does [man] wear a tallit katan at [a time of day]?", 9, 1
KSA009001260221250, "Can [man] make a talit katan from [color]-dyed [kind of clothing material]?", 9, 1
KSA009001260221251, "Can [man] make a tallit katan that is [a fraction] square amot in area?", 9, 1
KSA009001260221252, "Can [man] sew together the sides of a talit katan to make it easier to wear?", 9, 1
KSA009001260221253, "[man] is [someone's age in years] years old. Does he need a talit gadol?", 9, 1
KSA009001260503433, "Does [man] take off his talit katan before doing [an activity] at [time of day]?", 9, 1
KSA009001260503434, "Does [man] make a talit katan out of [a cloth-like material]?", 9, 1
KSA009001260503435, "How wide does [man] need to make his talit katan?", 9, 1
KSA009001260503436, "When [man] sews together the sides of his talit katan, how much of the side can he sew together?", 9, 1
KSA009001260503437, "[man] is a single man who was never married. Does he wear a talit during tefilah?", 9, 1
KSA009001260504445, "Does [man] wear a talit katan while he [does activity]?", 9, 1
KSA009001260504446, "Can [man] make his talit katan out of his [household items made out of cloth]?", 9, 1
KSA009001260504447, "Can [man] make a [color] talit katan?", 9, 1
KSA009001260504448, "Can [man] make his cotton [kind of clothing item] into a talit katan?", 9, 1
KSA009001260504449, "Can [man] make a talit katan [a fraction] amah wide and [a fraction] amah long?", 9, 1
KSA009001260504450, "Can [man] make a talit katan [a fraction] amah wide and [a number from one to ten] amos long?", 9, 1
KSA009001260504451, "[man] is [number from thirteen to fifty] years old. Does he need his own talit gadol to wear during tefilah?", 9, 1
KSA009001260505457, "Can [man] buy tzitzit from [weird name for a person] the [adjective describing a lack of good middos in some way] [job title]?", 9, 1
KSA009002260504452, "[person] only has linen cloth. Can they use it to make a talit?", 9, 2
KSA009002260504453, "[man] has a rectangular linen garment he wants to wear for [doing activity] that lacks tzitzit. Can he attach wool tzitzit?", 9, 2
KSA009002260505458, "Linen and [a kind of fabric material other than linen] fabric are both available. Which can [person] use to make a talit?", 9, 2
KSA009002260505459, "[man] has a talit made fully out of linen. Can he attach wool tzitzit to the corners?", 9, 2
KSA009003260504454, "As long as the hole for the tzitzah is only 3 agudalin from one side of the corner, can it be [number from four to ten] agudalin from the remaining side?", 9, 3
KSA009003260504455, "A tzitzah goes thru a hole in the corner of [man]'s rectangular garment. The hole is 3 agudalin from each side of the corner. Is this tzitzah kosher?", 9, 3
KSA009003260504456, "[man] is tying tzitzit on the corner of a talit that has fringes left unwoven along two of the sides. How does [man] take into account these fringes when measuring the location for the tzitzit hole?", 9, 3
KSA009003260505460, "Can [person] make the hole in the corner of the tallit for the tzitzah [number between three and ten] agudalin from the side of the corner?", 9, 3
KSA009003260505461, "When [person] measures the agudalin between the tzitzah hole and the edge of the talit corner, which part of the thumb does he use?", 9, 3
KSA009003260505462, "[person] makes a hole in the corner of the talit which is [number from four to ten] agudalin from the side of the corner. when the tzitzit is tied, the hole is pulled within 3 agudalin of the edge. Is this kosher?", 9, 3
KSA009003260505463, "[man] ties tzitzit thru a hole [number from four to ten] agudalin from the side of the talit's corner. The hole is then epanded by cutting it so that it extends closer to the corner, within 3 agudalin. Is this kosher?", 9, 3
KSA009003260505464, "[man] ties tzitzit thru a hole at the corner of a talit. The hole is one agudal from the edge of the corner. Is this tzitzah kosher?", 9, 3
KSA009003260505465, "[man] ties tzitzit thru a hole at the corner of a talit. The hole is three agudalin from the edge of the corner. When the tzitzah knot is tightened, the hole is brought one agudal from the edge. Is this tzitzah kosher?", 9, 3
KSA009003260505466, "[man] tied tzitzit thru a hole at the corner of a talit. The unwoven threads at the edge of the talit extend along the sides of the corner. Is this tzitzah kosher?", 9, 3
KSA009004260505467, "[man] tied tzitzit thru a correctly-positioned hole at the corner of a talit. The hole now becomes torn so that it extends very close to the edge of the corner. Is the tzitzah still kosher?", 9, 4
KSA009004260505468, "When [person] is sewing a talit for [man], does [person] need to reinforce the edge of the talit corners and the holes for the tzitzit?", 9, 4
KSA009005260505469, "[man] ties tzitzit for his talit. How many knots and coils does he make?", 9, 5
KSA009005260505470, "How many strings does [man] use to tie a new tzitzit?", 9, 5
KSA009005260505471, "How many loops does [man] wind in each coil of the tzitzit?", 9, 5
KSA009005260505472, "When [man] ties tzitzit, which of the coils does he make longest?", 9, 5
KSA009005260505473, "When [man] ties tzitzit, how long must be the distance from the knot at the base to the tip of each string?", 9, 5
KSA009005260505474, "[man] ties tzitzit, making the strings extend [number from one to five] times longer than the area of knots and coils. Is this right?", 9, 5
KSA009005260505475, "On one of [man]'s tzitzit, the strings come out in two groups of four from the last knot. Two strings are selected emerging from the same side of the knot. What are the chances these two strings are actually connected at the base and are one long string?", 9, 5
KSA009005260607533, "When [man] ties tzitzit, will he make each set of coils equally spaced out?", 9, 5
KSA009005260607534, "[man] ties tzitzit on the corner of his garment. From the base of the first knot to the end of the longest string is [number from twelve to twenty] agudalin. Is this tzitzah kosher?", 9, 5
KSA009005260607535, "[man] ties tzitzit on the corner of his garment. From the base of the first knot to the end of the shortest string is [number from twelve to fifteen] agudalin. Is this tzitzah kosher?", 9, 5
KSA009005260607536, "[man] ties tzitzit on the corner of his garment. From the base of the first knot to the end of the shortest string is [number from five to eleven] agudalin. Is the tzitzah kosher?", 9, 5
KSA009005260607537, "[man] ties tzitzit. From the end of the third knot to the end of each string is at least [number from one to twenty] agudalin. Is the tzitzah kosher?", 9, 5
KSA009005260607538, "[man] ties tzitzit. The distance from the first knot to the fifth knot is [number from one to three] agudalin. How long should he make the strings hanging beyond the fifth knot?", 9, 5
KSA009005260607539, "[man] ties tzitzit. The distance from the first knot to the fifth knot is [number from four to eight] agudalin. How long should he make the strings hanging beyond the knots and coils?", 9, 5
KSA009005260607540, "[man] ties tzitzit. When he ties a knot, how does he determine which hanging threads to put in each group of threads that form the knot?", 9, 5
KSA009006260505476, "[man] takes a long thread, folds it into four lengths, and then passes the four folded lengths thru a garment's corner hole to tie tzitzit. Can [man] tie the tzitzit and then cut apart the lengths to make kosher tzitzit?", 9, 6
KSA009006260505477, "[man] has a tzitzah tied to the corner of his garment. The hole tears and the whole tzitzah falls off the garment. If [man] reattaches the sides of the hole, putting back the tzitzah, is it kosher to wear?", 9, 6
KSA009006260506478, "[man] had a three-cornered garment with tzitzit on each corner. If [man] reshapes the garment to have four corners, how many tzitzit does he need to add?", 9, 6
KSA009006260513479, "[man] had a [kind of shirt with little corners cut into the waist, like a suit jacket or polo shirt] with four tiny corners that he tied tzitzit to. Afterward, he cut up the sides of the shirt to make the corners much larger and the whole garment rectangular in shape. Are the tzitzit kosher?", 9, 6
KSA009006260513480, "[man] tied tzitzit onto a [cylindrical, slender object], and then transferred the tzitzit into slits in the corners of a garment and sewed up the slits into holes to attach the tzitzit to the garment. Are the tzitzit kosher?", 9, 6
KSA009007260513481, "Does [man] need to check if the tzitzit are kosher before putting on a tallit at [time of day]?", 9, 7
KSA009007260513482, "Which part of the tzitzit does [man] need to check each time he examines the tzitzit to ensure they are kosher?", 9, 7
KSA009007260513483, "[man] is putting on a tallit. The strings on the end of one of the tzitzit are tangled up. Does he need to separate the strings and straighten them out?", 9, 7
KSA009007260513484, "[man] gets to shul late in the morning and it's almost time for pesukei dezimrah. Does he need to check his tzitzit before putting on his tallit?", 9, 7
KSA009007260513485, "[man] gets to shul late in the morning and it's almost time for barchu. Does he need to check his tzitzit before putting on his tallit?", 9, 7
KSA009007260513486, "[man] gets to shul late in the morning and it's almost time for the Torah reading. Does he need to check his tzitzit before putting on his tallit?", 9, 7
KSA009008260513487, "Does [person] make a beracha before [doing an action that is a mitzvah1]?", 9, 8
KSA009008260513488, "[person1] makes a beracha on the mitzvah of [an action that is a mitzvah]. How long does [person1] need to wait afterward to start [an action that is a mitzvah]?", 9, 8
KSA009008260513489, "How does [man] hold the tallit before making the beracha on it if he is a normal, healthy person?", 9, 8
KSA009008260513490, "Before [man] makes the beracha on putting on a tallit, what does he need to remember about the mitzvah?", 9, 8
KSA009008260513491, "What beracha does [man] say on putting on the tallit?", 9, 8
KSA009008260513492, "What posture does [man] adopt for his body when he makes the beracha on putting on the tallit?", 9, 8
KSA009008260513493, "What does [man] do with the tallit after making the beracha on its donning?", 9, 8
KSA009008260513494, "After putting on the tallit, how long does [man] hold it wrapped around the head?", 9, 8
KSA009008260513495, "What does [man] do after putting on the tallit while it is still wrapped around his head?", 9, 8
KSA009008260513496, "Is it okay if [man]'s tzitzit drag on the ground while dancing on [a time of year with dancing in shul]?", 9, 8
KSA009008260513497, "What can [man] do while dancing on simchat Torah at shul to prevent his tzitzit from dragging on the ground?", 9, 8
KSA009008260607541, "[man] is standing in shul. Does he need to sit down to put on his tallit?", 9, 8
KSA009008260607542, "When [man] puts on a tallit, how much of his head does he cover after first making the beracha?", 9, 8
KSA009008260607543, "When [man] puts on a tallit after making the beracha, what does he do with the corners of the tallit?", 9, 8
KSA009009260513498, "At [time of day]l, can [man] make a beracha on wearing the tzitzit?", 9, 9
KSA009009260513499, "[man] wakes up in the morning and looks out the window. How does he know if it's time yet to make a beracha on tzitzit?", 9, 9
KSA009009260513500, "[man1] has a tallit gadol and puts on a tallit katan at night. When will he say the beracha over it? What beracha does he make?", 9, 9
KSA009009260513501, "[man2] has a tallit gadol and puts on a tallit katan while his hands are still dirty. When will he say the beracha over it? What beracha does he make?", 9, 9
KSA009009260513502, "[man] does not have a tallit gadol and puts on a tallit katan while his hands are clean during the day. When will he say the beracha over it? What beracha does he make?", 9, 9
KSA009009260513503, "[man] does not have a tallit gadol and puts on a tallit katan at night. When will he say the beracha over it? What beracha does he make?", 9, 9
KSA009009260513504, "[man3] does not have a tallit gadol and puts on a tallit katan while hi shands are dirty. When will he say the beracha over it? What beracha does he make?", 9, 9
KSA009009260513505, "[man] puts on a tallit katan during the day and leaves it on overnight. When does he say a beracha over it the next day? What beracha does he make?", 9, 9
KSA009009260616544, "At [time during the day], will [man] make a beracha on putting on tzitzit?", 9, 9
KSA009009260616545, "At [time during the night], will [man] make a beracha on putting on tzitzit?", 9, 9
KSA009009260616546, "Will [man] bless on wearing tzitzit right after dawn?", 9, 9
KSA009009260616547, "Can [man] bless on wearing tzitzit once the world is fully lit before the sun comes out yet in the morning?", 9, 9
KSA009010260513506, "[man] takes off a tallit and then puts it back on. Does he need a new beracha?", 9, 10
KSA009010260513507, "[man] takes off his tallit to go to the bathroom and plans to put it back on right afterward. When does he need to make a new beracha?", 9, 10
KSA009010260607508, "[man] takes off his talit planning to put it back on in [a small number] minutes. Does he need a new beracha when he puts it back on?", 9, 10
KSA009010260607509, "[man] takes off his talit not planning to wear it again soon. Does he need a new beracha when he puts it back on after [a small number] minutes?", 9, 10
KSA009010260607510, "[man]'s talit falls off his body, except that a part of it remains covering his [body part]. Does he need a new beracha to put it fully back on?", 9, 10
KSA009010260607511, "[man]s talit falls fully off his body and lands on the [furniture item]. Does he need a new beracha to put the talit back on?", 9, 10
KSA009010260607512, "[man]'s talit falls off his body and he catches it with his [movable body part] before it finishes falling. Does he need a new beracha to put it back on?", 9, 10
KSA009010260607513, "[man]'s talit falls off his body onto the ground while he is saying [part of the shacharit tefilah that one can't interrupt]. When will he put it back on, and how will he do so?", 9, 10
KSA009010260616548, "[man] takes off his tallit to go [do activity], planning to put it back on right after. Does he need to make a new beracha on it?", 9, 10
KSA009010260616549, "[man] takes off his tallit to go and [do activity2] without any intention of putting it back on soon. Will he make a new beracha on the tallit when he puts it back on afterward?", 9, 10
KSA009011260607514, "[man] does not have his own talit available. What does he need to hear from [man2] to be allowed to wear [man2]'s tallit?", 9, 11
KSA009011260607515, "What does [man] need to hear from [man2] to have permission to move [man2]'s tallit from the [kind of non-bathroom room in a shul1] to the [kind of non-bathroom room in a shul2]?", 9, 11
KSA009011260607516, "On [a weekday], [man] needed a talit and [man2] wasn't around, so [man] unfolded [man2]'s talit and put it on. Will he fold it back afterward?", 9, 11
KSA009011260607517, "On Shabbos, [man] needed a talit and [man2] wasn't around, so [man] unfolded [man2]'s talit and put it on. Will [man] fold it back afterward?", 9, 11
KSA009011260607518, "If [man] borrows [man2]'s talit to put on for an aliya to the Torah, does [man] make a beracha on wearing it?", 9, 11
KSA009011260607519, "If [man] borrows [man2]'s talit to put on for an aliya to the Torah, what intention will [man] have in mind regarding acquiring the talit when he takes it?", 9, 11
KSA009011260607520, "If [man] borrows a talit from the shul to put on for an aliya to the Torah, does [man] make a beracha on wearing it?", 9, 11
KSA009012260607521, "[person] and [person2] get in an argument about whether when the Torah talks about "tzemer" it includes wool from a [kind of animal that makes wool]. What is the answer?", 9, 12
KSA009012260607522, "[person] and [person2] get in an argument about whether when the halacha talks about "tzemer" it includes wool from a [kind of animal that makes wool2]. What is the answer?", 9, 12
KSA009012260607523, "Will [man] make a beracha on a talit with warp made of wool and woof of silk?", 9, 12
KSA009012260607524, "Will [man] make a beracha on a talit with warp made of wool and woof of cotton?", 9, 12
KSA009012260607525, "Will [man] make a beracha on a talit with warp made of silk and woof of wool?", 9, 12
KSA009012260607526, "Will [man] make a beracha on a talit with warp made of cotton and woof of wool?", 9, 12
KSA009012260607527, "Will [man] make a beracha on a talit made of silk with wool tzitzit?", 9, 12
KSA009012260607528, "If [man]'s talit is made of [a kind of non-wool cloth] and has wool tzitzit, how will [man] make the beracha on putting on the talit?", 9, 12
KSA009012260607529, "Will [man] make a beracha on a talit made of wool with wool tzitzit?", 9, 12
KSA009012260607530, "Will [man] make a beracha on a talit made of silk with silk tzitzit?", 9, 12
KSA009012260607531, "Can [man] use a combination of wool and silk threads to tie the tzitzit on a talit?", 9, 12
KSA009012260607532, "Can [man] buy silk strings from a factory in [country] to tie his tzitzit?", 9, 12
KSA009013260616550, "One of the strings on one of the tzitzit on [man]'s tallit breaks [number from four to nine] agudalin past the knots. Is the tzitzit still kosher?", 9, 13
KSA009013260616551, "One of the strings on one of the tzitzit on [man]'s tallit breaks [number from one to three] agudalin past the knots. Is the tzitzit still kosher?", 9, 13
KSA009013260616552, "Four of the eight strings hanging past the knots on [man]'s tzitzit break [two or three] agudalin past the knots. Is the tzitzit still kosher?", 9, 13
KSA009013260616553, "Six of the eight strings hanging past the knots on [man]'s tzitzit break [two or three] agudalin past the knots. Is the tzitzit still kosher?", 9, 13
KSA009013260616554, "On [man]'s tzitzit, two strings that aren't connected at the base of the tzitzit both broke right after the knots. Is the tzitzit still kosher?", 9, 13
KSA009013260616555, "On [man]'s tallit, two of the tzitzit strings that are connected at the base of the tzitzit both broke a bit after the knots. Is the talit still kosher?", 9, 13
KSA009013260616556, "On [man]'s talit, one of the tzitzit strings breaks just past the knots. If the tzitzah is otherwise intact, is it kosher?", 9, 13
KSA009013260616557, "On [man]'s talit, one of the strings breaks [number from zero to three] agudalin past the knots, and another string on the same tzitzah breaks [number from zero to three2] agudalin past the knots. Is the tzitzah still kosher?", 9, 13
KSA009013260616558, "[man] ties tzitzit knots so that the opposite ends of each string are always separate on opposite sides of each knot. If two strings break on opposite sides right past the last knot, is the tzitzah kosher?", 9, 13
KSA009013260616559, "[man2] ties tzitzit knots so that the opposite ends of each string are always separate on opposite sides of each knot. If two strings break on the same side right past the last knot, is the tzitzit kosher?", 9, 13
KSA009013260616560, "One of [man]'s four tzitzit strings breaks by the hole in the talit corner before the knots. Is the tzitzit kosher?", 9, 13
KSA009013260616561, "[man] tied tzitzit so the strings were all at least [number from twelve to twenty] agudalin from the first knot to the end of each string. Afterwards, some of the strings break so they are only [number from three to eleven] agudalin past the knots. Is the tzitzit still kosher?", 9, 13
KSA009013260616562, "[man] ties tzitzit so the strings are all at least [number from six to eleven] agudalin from the first knot to the end of each string. Afterwards, some of the strings break so they are only five agudalin past the knots. Is the tzitzit still kosher?", 9, 13
KSA009014260616563, "[man] ties tzitzit with four [type of cloth material] threads. Is the tzitzit kosher?", 9, 14
KSA009014260616564, "[man2] ties kosher tzitzit of [type of string used to tie tzitzit] strings. The twisted strands that form the string come apart on one of the strings [number from two to ten] agudalin past the knots. Does this affect the kosher status of the tzitzit?", 9, 14
KSA009015260616565, "[man] has a talit [number from one to four] amot wide and twice as long. He divides it into two smaller garments [number from one to four] amot long and [number from one to four] amot wide. If he reattaches the two garments again, to what extent are the original tzitzit still kosher?", 9, 15
KSA009015260616566, "[man] has a talit [the minimum width of a talit] wide and [a length less than twice the minimum length of a talit] long. He divides it into two smaller garments half as long and equally wide. After he reattaches the two halves, under what conditions are the original tzitzit kosher?", 9, 15
KSA009015260616567, "[man] has a talit [number from one to four] amot wide and one and [a fraction less than one] amot long. He divides it into two smaller garments, each [number from one to four] amot wide, and one an amah long and the other [a fraction less than one] amot long. After he reattaches the two halves, to what extent are the original tzitzit kosher?", 9, 15
KSA009016260616568, "A rectangle of fabric is cut off from the corner of [man]'s talit, measuring [number less than three] agudalin by [number less than three1] agudalin. To be nice, [person] sewed the rectangle of fabric back on. Where should [man] tie his tzitzit on the corner?", 9, 16
KSA009016260616569, "Before [man2] was able to tie tzitzit on his new rectangular garment, a rectangle of fabric ripped off from the corner of [man2]'s talit, measuring [number less than three] agudalin by [number less than three1] agudalin. Once the rectangle was sown back on, where can [man2] tie the tzitzit on this corner?", 9, 16
KSA009016260617570, "The corner of [man]'s new rectangular garment tore off most of the way and only a little part of it remains attached. If [man] gets it sewn back on properly, can he attach tzitzit to this talit normally?", 9, 16
KSA009016260617571, "[man2] is making a new talit. Will he add smaller rectangular pieces of fabric in the corners on top of the main garment?", 9, 16
KSA009017260617572, "[man]'s talit has a hole slightly less far away from both sides of the corner than the distance from the middle knuckle of the thumb to the tip of the nail. Is this a good hole to attach tzitzit thru?", 9, 17
KSA009017260617573, "[man]'s talit has a hole slightly farther away from both sides of the corner than the distance from the middle knuckle of the thumb to the tip of the nail. Is this a good hole to attach tzitzit thru?", 9, 17
KSA009017260617574, "[man] needs to add stitches to his [kind of cloth used for a talit] talit in the area around the tzitzit hole. What kind of thread can he use?", 9, 17
KSA009017260617575, "[man] has a talit made of [kind of cloth used for talit2]. What kind of thread can he use to reinforce the edges of the tzitzit hole?", 9, 17
KSA009017260617576, "[man] has a talit with [kind of cloth used for talit] tzitzit. What kind of thread can he use to reinforce the edges of the tzitzit hole?", 9, 17
KSA009017260617577, "[man] has a [kind of thread used for tzitzit2] talit with [kind of thread used for tzitzit2] tzitzit. Can he use [color] [kind of thread used for tzitzit2] thread to sew around the corner and tzitzit hole?", 9, 17
KSA009018260617578, "[man]'s talit has kosher tzitzit, but he thinks that other tzitzit would be nicer. Can he take off the current tzitzit to replace them?", 9, 18
KSA009018260617579, "[man2]'s talit has kosher tzitzit. Since he is feeling [an emotion], can he and [man] take off [man2]'s tzitzit and replace them with other, just-as-good tzitzit?", 9, 18
KSA009018260618580, "[man]'s talit is [number from one to fifty] years old. All of the tzitzit are still kosher, but some of the threads are broken. Is he permitted to remove these damaged tzitzit?", 9, 18
KSA009018260618581, "[man]'s old talit has nice kosher tzitzit. Can he remove them and replace them with other kosher tzitzit that aren't as nice?", 9, 18
KSA009018260618582, "[man] has a talit that he doesn't plan to wear. Can he remove its tzitzit?", 9, 18
KSA009018260618583, "After one of [man]'s tzitzit became pasul, he detaches it from his talit. Can he throw it out in the [gross spot] with the [gross item]?", 9, 18
KSA009019260618584, "After one of [man]'s tzitzit became pasul, he detaches it from his talit. Can he throw it out in the [kind of trash receptacle] with the [thing that goes in the trash]?", 9, 19
KSA009019260618585, "[person] has a pasul tzitzit removed from a talit. What will they do with it?", 9, 19
KSA009019260618586, "[person] has an old talit garment that isn't worn anymore as a mitzvah. Can they use it as a [kind of rectangular decorative household garment]?", 9, 19
KSA009019260618587, "[person] has an old talit garment that isn't worn anymore as a mitzvah. Can they use it as a [kind of rectangular household garment used for cleaning]?", 9, 19
KSA009020260618588, "[man3] comes on Shabbat morning to shul and examines his talit. As far as he knew before Shabbat, it was kosher, but now one of the tzizit is evidently pasul. If there is another talit that he can borrow, can he wear his talit anyway?", 9, 20
KSA009020260618589, "[man3] comes on Shabbat morning to shul and examines his talit. As far as he knew before Shabbat, it was kosher, but now one of the tzizit is evidently pasul. If there is no other talit that he can borrow, can he wear his talit with a pasul tzitzit?", 9, 20
KSA009020260618590, "[man] gets to shul on Shabbos and finds that his talit has become pasul since the last time he examined it, and there are no others he can wear. Since he's embarrassed not to wear a talit, he decides to put it on anyway. What beracha does he make?", 9, 20
KSA009020260618591, "On [day of the week], [person] discovers that the tzitzit on his talit have become pasul. On Shabbat, he still hasn't gotten around to fixing them. If there isn't another tallit for him to wear and he's embarrassed not to wear a tallit at shul on Shabbat, what beracha would he make on wearing his tallit?", 9, 20
KSA009021260618592, "[man5] wears a garment that is obligated in tzitzit without tzitzit on it. What is the technical classification of the nature of his sin?", 9, 21
KSA009021260618593, "[man] has a rectangular plastic rain poncho that does not have tzitzit, and it is too challenging to try to attach tzitzit to the garment. What should he do instead?", 9, 21
KSA009021260618594, "[man] has a rectangular [kind of rectangular garment] without tzitzit that he therefore cannot wear. He takes one of the corners and folds it and sews the corner back so it looks rounded off. Can [man] wear this garment now?", 9, 21
KSA010001260618595, "[man] puts on pasul tefillin. Does this fulfill the mitzvah of wearing tefillin?", 10, 1
KSA010001260618596, "When [man] puts on pasul tefillin thinking they are kosher, can he make a beracha?", 10, 1
KSA010001260618597, "[man] needs new tefillin. Can he buy them from [person]?", 10, 1
KSA010001260618598, "[man2] needs new tefillin. Can he buy them from the Rav of [the name of a shul]?", 10, 1
KSA010001260618599, "[man3] needs new tefillin. Can he buy them from [man4], a well-known heaven-fearing sofer?", 10, 1
KSA010001260618600, "Can [man] buy tefillin straps from [man3], who is known as a scrupulously honest merchant, if they were made for the mitzvah of tefillin from [kind of zoo animal] skins?", 10, 1
KSA010001260618601, "Can [man] buy tefillin straps from [man2], who is a reliable person, if they were made for the mitzvah of tefillin from [kosher animal] hide?", 10, 1
KSA010001260618602, "If [man] asks [man4], who is faithful and honest, to cut strips of leather the right dimensions for tefillin straps, can [man] use these straps for tefillin?", 10, 1
KSA010001260618603, "[man] has a friend [man2], who knows [person1], who sells tefillins sets for a low price. [man] doesn't know much about the quality or origin of the tefillin. If he decides to buy them anyway, are they kosher?", 10, 1
KSA010001260618604, "[person] finds a really good deal on tefillin online and decides to buy them for [man6]. Are they kosher?", 10, 1
KSA010001260618605, "[man] buys himself a nice [expensive physical purchase]. How much should he spend on a nice [item used for a mitzvah]?", 10, 1
KSA010001260618606, "The straps of [man2]'s tefillin are [color1]. Is that okay?", 10, 1
KSA010001260618607, "The boxes of [man3]'s tefillin are [color2]. Is that okay?", 10, 1
KSA010001260618608, "The boxes of [man6]'s tefillin are rotting. Is that okay?", 10, 1
KSA010001260618609, "How should [man] blacken his tefillin straps if they change color to [color1]?", 10, 1
KSA010001260618610, "How often should [man] maintain his tefillin straps to keep them black?", 10, 1
KSA010001260618611, "Can [man] use [non-kosher fish species] oil to blacken his tefillin straps?", 10, 1
KSA010001260618612, "Can [man] use [kosher fish species] oil to blacken his tefillin straps?", 10, 1
KSA010001260618613, "[man]'s tefillin get a hole in the side after a few years. How should he determine if they are still koshre?", 10, 1
KSA010001260618614, "The stiches start to break open on [man]'s tefillin. How should he determine if they are still kosher?", 10, 1
KSA010001260618615, "The corner of [man]'s head tefillin rubs on the [something that is low overhead that a person can hit their head on] and ends up with a dent. Are the tefillin still suitable for the mitzvah?", 10, 1
KSA010001260618616, "As [man3]'s tefillin get older, some of the skin on top of the bayis starts breaking away. Are the tefillin still kosher?", 10, 1
KSA010001260618617, "[man] is careful about the mitzvah of tefillin, treats them with sanctity, and doesn't speak about mundane matters while wearing them. How will this affect the length of his life?", 10, 1
KSA010001260618618, "[man] is careful about the mitzvah of tefillin, treats them with sanctity, and doesn't speak about mundane matters while wearing them. What are the chances that he has a part in olam haba?", 10, 1
KSA010001260618619, "[man] puts the top of his talit over his head at shacharit. How much of his head tefillin should be covered with the tallit?", 10, 1
KSA010002260618620, "[man] wakes up early when it's still dark out. Can he put on tefillin yet?", 10, 2
KSA010002260618621, "[man] wakes up early. When it's just starting to get light out, can he put on tefillin yet", 10, 2
KSA010002260618622, "When [man] puts on his tallit in the morning, should he wait until after he puts on his tefillin first?", 10, 2
KSA010002260618623, "When [man] puts on his tefillin in the morning, should he wait until after he puts on his tallit first?", 10, 2
KSA010002260618624, "As [man] is heading to put on his tallit, he touches the tefillin. Does he put on the tallit or the tefillin first?", 10, 2
KSA010002260618625, "As [man2] is getting ready in the morning, he touches the tefillin bag. Does he put on the tefillin before his tallit?", 10, 2
KSA010003260622626, "[man] is right-handed. Which arm does he wear the tefillin on?", 10, 3
KSA010003260622627, "[man2] is left-handed. Which arm does he wear the tefillin on?", 10, 3
KSA010003260622628, "[man2] is putting on his tefillin shel yad. Which part of the arm does it go on?", 10, 3
KSA010003260622629, "[man3]'s tefillin sits on his bicep. Exactly where on the circumference of his arm should it sit?", 10, 3
KSA010003260622630, "[man] is putting on his tefillin shel rosh. Where on his head does the bayis sit?", 10, 3
KSA010003260622631, "[man] is putting on his tefillin shel rosh. Can the front of the tefillin rest on his forehead just in front of the base of his hairline?", 10, 3
KSA010003260622632, "[man] is putting on his tefillin shel rosh. Can the tefillin box sit on top of his head with the back of the base sitting just up to the area where a baby's skull is soft?", 10, 3`;


















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































