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
KSA005008260427349, "How far does [person] have to go from the turkey feces to daven?", 5, 8
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
KSA006001260422309, "Before [person] starts to say [a beracha for hashem], what will [person] be sure to know about what they are going to say?", 6, 1
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
KSA006002260501393, "Can [person5] say [a beracha on eating] with a lot of extra saliva in their mouth?", 6, 2
KSA006003260221219, "[person] is with their friend [person2] and making jokes. Can [person] make a beracha on [a kind of beverage] while in a completely silly mood?", 6, 3
KSA006003260221220, "Can [person] say that [person1] shouldn’t be blessed with [a good thing that a person wants in their life]?", 6, 3
KSA006003260221221, "Can [person1] refer to and say [a name of Hashem] over and over for fun?", 6, 3
KSA006003260221222, "Can [person2] write the word [a word for Hashem in any language]?", 6, 3
KSA006003260421282, "[person1] dislikes [person2]. Can they curse them?", 6, 3
KSA006003260421283, "[person] has a lot of extra saliva building up during davening. Can they spit it out after saying [a pasuk in davening with Hashem's name]?", 6, 3
KSA006003260421284, "Can [person] say 'adoshem' instead of a-d-n-y when saying [a song or phrase with the word hashem written out]?", 6, 3
KSA006003260422313, "Can [person] engage in a theoretical comparison of Hashem to [a type of thing] to help them with their [kind of personal goal or interest]?", 6, 3
KSA006003260422314, "Is [person1] allowed to say that H' shouldn't bless [person3] with [something that people usually want]?", 6, 3
KSA006003260422315, "Can [person] write [write a euphemism for a name of hashem like tzevakos here instead of an actual name of hashem] on a [writing surface] in a [kind of place]?", 6, 3
KSA006003260501394, "Can [person] say to [person2] to thank G' for how nice the weather is?", 6, 3
KSA006003260501395, "Can [famous politician] say that G' wants [a country] to [verb: a military action] [a country2]?", 6, 3
KSA006003260501396, "Can [person2] say a halachically-required beracha to Hashem for [doing an activity]?", 6, 3
KSA006003260501397, "Can [person3] mention G' while learning [an area of Torah study]?", 6, 3
KSA006003260501398, "Can [person4] invoke G' in the course of discussing G's role in [a period of Jewish history]?", 6, 3
KSA006003260501399, "Can a person write out 'we should [do activity] G'-willing' in a [kind of physical written document]?", 6, 3
KSA006004260223223, "[person] starts saying a [name of a beracha rishonah on food] on some [type of food] when they realize that they already made the right beracha. If they realize after saying 'baruch atah hashem,' what will they do?", 6, 4
KSA006004260223224, "[person1] starts blessing [the name of a beracha] when they realize that they're not required to say this beracha. If they realize after saying 'baruch atah hashem elokei,' what will they do?", 6, 4
KSA006004260223225, "[person] started to say the beracha of [the name of a beracha1] while [doing activity] but caught themselves and said 'lamdeni chukecha' to make it a pasuk. What else do they need to say?", 6, 4
KSA006004260223226, "[person] started to say the beracha of [the name of a beracha] while [doing activity] but caught themselves and said 'yisrael avinu meolam vead olam' to make it a pasuk. What else do they need to say?", 6, 4
KSA006004260421285, "[person1] already said [a beracha1]. They forget and start saying again 'Baruch atah H'.' What will they do if they remember now?", 6, 4
KSA006004260421286, "[person2] starts saying 'Baruch atah H' elokei' and then realizes they don't need to make [the name of a beracha]. What will they do?", 6, 4
KSA006005260223227, "In [person]'s community, the custom is to pour out all water in the vicinity of a dead body. [person] made a beracha on a glass of water and then, before they started drinking, heard that a dead body was nearby. What will they do?", 6, 5
KSA006006260421287, "[man] just finished shacharit and realized he isn't sure if he said [a beracha from birchot hashachar]. Wil he say the beracha now?", 6, 6
KSA006006260421288, "[person] isn't sure whether or not they already said [a beracha that a person is required to say]. Will they say the beracha just in case?", 6, 6
KSA006006260422316, "[person] realizes at [time of day] that they aren't sure if they said [a beracha that a person is obligated to say every day]. Will they go bakc and say the beracha?", 6, 6
KSA006006260501400, "[person2] ate [kind of food] for [a meal] and isn't sure if they said the after-beracha yet. Should they make the beracha now?", 6, 6
KSA006006260501401, "[person3] isn't sure if they said [a beracha that one must say every day]. Should they go back and say it?", 6, 6
KSA006007260317271, "How many berachos is [man1] obligated to say on [name of a day]?", 6, 7
KSA006008260223228, "When [person] is blessing [the name of a beracha] and [person2] hears them say 'Baruch atah Hashem,' what does [person2] say?", 6, 8
KSA006008260223229, "When [person] blesses [the name of a series of berachas like birkat hamazon or birchot hashachar], what does [person2] say as soon as [person] says each beracha?", 6, 8
KSA006008260421289, "When [person1] hears [person2] say 'baruch atah H' of [name of a beracha], what does [person1] say?", 6, 8
KSA006008260421290, "[person1] is saying [a beracha]. What will [person2] do when they hear [person1] finish saying [a beracha]?", 6, 8
KSA006008260422317, "[person] says a beracha '[the name of a beracha]' and [person2] hears. Can [person2] skip answering Amen?", 6, 8
KSA006009260223230, "If [person] is saying [the name of a beracha] for themselves and for [person2], will [person2] say 'baruch hu uvaruch shemo'?", 6, 9
KSA006009260421291, "[person1] is in the middle of [something that is forbidden to interrupt] and hears [person2] make [a beracha]. When [person2] gets to 'baruch atah hashem' of the beracha, what will [person1] say?", 6, 9
KSA006009260421292, "[person1] and [person2] both need to say [a beracha], but [person1] doesn't know the words, so [person2] says [a beracha] for both of them. When [person2] says 'Baruch atah H', what will [person1] say?", 6, 9
KSA006009260422318, "[person] is involved in [a situation where a person halachically isn't supposed to interrupt to speak] and hears [person2] making a beracha [name of a beracha]. What will [person] say after [person2] says 'Baruch atah H'', considering that [person] is still involved in [a situation where a person halachically isn't supposed to interrupt to speak]?", 6, 9
KSA006009260422319, "[person] is saying the beracha [the name of a beracha] for [person2]. After [person] says 'baruch atah H',' what will [person2] answer?", 6, 9
KSA006009260501402, "[person2] is blessing [a beracha] on behalf of [person3]. Does [person3] say 'Baruch hu uvaruch shemo' after [person2] says 'Baruch atah H''?", 6, 9
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
KSA007002260421299, "Can [man1] bless 'hanoten lasechvi vinah' at [time in the early morning]?", 7, 2
KSA007002260422324, "When is the earliest time that [person] can bless 'hanoten lasechvi vinah'?", 7, 2
KSA007002260501403, "When [person] wakes up at [time in the early morning before dawn], can they say all of birchos hashachar?", 7, 2
KSA007002260501404, "When [person] wakes up at [time in the early morning after dawn], can they say all of birchos hashachar?", 7, 2
KSA007003260221223, "[person] is blind. Will [person] still say the beracha 'pokeach ivrim'?", 7, 3
KSA007003260221224, "After making the beracha 'matir asurim,' [person] realizes they have not yet blessed 'zokef kefufim.' Can they make that beracha?", 7, 3
KSA007003260221225, "After making the beracha 'zokef kefufim,' [person] realizes they have not yet blessed 'matir asurim.' Can they make that beracha?", 7, 3
KSA007003260221226, "After making the beracha '[one of birchos hashachar],' [person] realizes they have not yet blessed 'matir asurim.' Can they make that beracha?", 7, 3
KSA007003260421300, "[person4] is blind. What beracha does [person4] say for 'pokeach ivrim'?", 7, 3
KSA007003260421301, "Can [person5] say all of birchot hashachar backwards?", 7, 3
KSA007004260221227, "After [person] says 'hamaavir shenah meeinai utenumah meafapai,' does [person2] answer 'amen'?", 7, 4
KSA007004260422325, "Does [person2] need to answer amen after [person3] says 'hamaavir shenah meeinai utenumah meafapai'?", 7, 4
KSA007005260221228, "[person] stays up all night [doing activity]. Can they make the beracha 'al netilat yadayim' in the morning before shacharit?", 7, 5
KSA007005260221229, "[person2] stays up all night [doing activity2]. Can they make all the berachas of birchos hashachar on their own in the morning?", 7, 5
KSA007005260421302, "[person] stays up all night [doing activity1]. Can they make the beracha 'al netilat yadayim' before shacharit?", 7, 5
KSA007005260501409, "[man] stays up all night [doing activity]. In the morning, which berachas will he ask [man2] to say for him?", 7, 5
KSA007006260221230, "[person] doesn't bless 'al netilat yadayim' before shacharit. Will they bless 'al netilat yadayim' after shacharit?", 7, 6
KSA007006260501410, "[man] forgets to bless 'elokai neshamah' before shacharit. How long can he say it afterward?", 7, 6
KSA007006260501411, "[man] forgets to bless 'al netilat yadayim' before shacharit. How long can he say it afterward?", 7, 6
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
KSA009008260513496, "Is it okay if [man]'s tzitzit drag on the ground while dancing for [an occasion for dancing in shul]?", 9, 8
KSA009008260513497, "What can [man] do while dancing on simchat Torah at shul to prevent his tzitzit from dragging on the ground?", 9, 8
KSA009008260607541, "[man] is standing in shul. Does he need to sit down to put on his tallit?", 9, 8
KSA009008260607542, "When [man] puts on a tallit, how much of his head does he cover after first making the beracha?", 9, 8
KSA009008260607543, "When [man] puts on a tallit after making the beracha, what does he do with the corners of the tallit?", 9, 8
KSA009009260513498, "At [time of day], can [man] make a beracha on wearing the tzitzit?", 9, 9
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
KSA009012260607521, "[person] and [person2] get in an argument about whether when the Torah talks about 'tzemer' it includes wool from a [kind of animal that makes wool]. What is the answer?", 9, 12
KSA009012260607522, "[person] and [person2] get in an argument about whether when the halacha talks about 'tzemer' it includes wool from a [kind of animal that makes wool2]. What is the answer?", 9, 12
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
KSA009020260618591, "On [day of the week], [man1] discovers that the tzitzit on his talit have become pasul. On Shabbat, he still hasn't gotten around to fixing them. If there isn't another tallit for him to wear and he's embarrassed not to wear a tallit at shul on Shabbat, what beracha would he make on wearing his tallit?", 9, 20
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
KSA010003260622632, "[man] is putting on his tefillin shel rosh. Can the tefillin box sit on top of his head with the back of the base sitting just up to the area where a baby's skull is soft?", 10, 3
KSA010003260925633, "[man] just put on his tefillin shel rosh and the front is resting just forward of his hairline. Has he done the mitzvah of putting on the tefillin shel rosh?", 10, 3
KSA010003260925634, "[man] just put on his tefillin shel rosh and the front is resting a little behind the edge where hairs start to grow. Has he done the mitzvah of putting on the tefillin shel rosh?", 10, 3
KSA010003260925635, "[man1] puts on his tefillin shel rosh at the front of his head just behind the hairline but off-center to the [left or right]. Has he fulfilled the mitzvah of putting on the tefillin shel rosh?", 10, 3
KSA010003260925636, "[man] puts on his tefillin shel rosh at the front of his head behind the hairline and off-center to the [right or left] and not in the middle. He made the beracha on putting it on. Is this a good beracha?", 10, 3
KSA010003260925637, "[man] puts on his tefillin shel rosh. Where should the knot at the back of [man]'s head rest?", 10, 3
KSA010003260925638, "The knot of [man]'s tefillin shel rosh is slightly off-center to the [right or left]. Is this proper?", 10, 3
KSA010003260925639, "When [man] puts on his tefillin shel rosh, the strap is loose on his head. Does [man] need to tighten the strap?", 10, 3
KSA010003260925640, "When [man] puts on his tefillin shel rosh, the strap is tight on his head. Does [man] need to loosen the strap?", 10, 3
KSA010004260925641, "[man] stops [doing an activity] to put on tefillin. Will [man] sit, stand, or lie down to do so?", 10, 4
KSA010004260925642, "[man] needs to get his tefillin out of their bag. Can [man] shake out the bag to remove them?", 10, 4
KSA010004260925643, "[man] needs to get his tefillin out of their bag. How will he get them out of their bag?", 10, 4
KSA010004260925644, "[man] is about to put on tefillin. Which will he put on first: the tefillin shel yad or the tefillin shel rosh?", 10, 4
KSA010004260925645, "[man] is putting on his tefillin shel yad. Will he wait until he tightens the knot to bless lehaniach tefillin?", 10, 4
KSA010004260925646, "[man] is putting on his tefillin shel yad. At what exact point in the coiurse of doing this does he make the beracha?", 10, 4
KSA010004260925647, "When [man] makes the beracha on the tefillin shel yad, what vowel sound follows the hey of lehaniach?", 10, 4
KSA010004260925648, "When [man] makes the beracha on tefillin, how does he pronounce the lamed of the word tefillin?", 10, 4
KSA010004260925649, "Immediately after making the beracha [one of birchos hashachar], what does [man] do with his tefillin?", 10, 4
KSA010004260925650, "Immediately after making the beracha on the tefillin shel yad, what does [man] do with his tefilin?", 10, 4
KSA010004260925651, "When [man] puts on his tefillin shel yad, what does he need to do before he tightens the knot on the bicep?", 10, 4
KSA010004260925652, "After tightening the tefillin shel yad on the upper arm, what does [man] do immediately next with the strap of the tefillin shel yad?", 10, 4
KSA010004260925653, "When [man] puts on the tefillin shel yad, how many times does he wrap the strap around his arm?", 10, 4
KSA010004260925654, "After winding the tefillin shel yad on the arm, wht does [man] need to do before putting on the tefillin shel rosh?", 10, 4
KSA010004260925655, "What beracha does [man] make on wearing the tefillin shel rosh?", 10, 4
KSA010004260925656, "At what point in the process of putting on the tefillin shel rosh will [man] make the beracha al mitzvat tefillin?", 10, 4
KSA010004260925657, "When [man] makes the beracha al mitzvat tefillin on the tefillin shel rosh, what vowel does he say following the vav of mitzvat?", 10, 4
KSA010004260925658, "What does [man] still need to do with the tefillin shel rosh after saying the beracha on it?", 10, 4
KSA010004260925659, "What does [man] still need to say upon putting on the tefillin shel rosh after the beracha?", 10, 4
KSA010004260925660, "At what point during putting on the tefillin shel rosh does [man] say baruch shem kevod...?", 10, 4
KSA010004260925661, "[man] is putting on tefillin and says the beracha "al mitzvat tefilin." How loudly does he make the beracha?", 10, 4
KSA010004260925662, "[man] is putting on tefillin. After putting on the tefilin shel rosh, how many times does he wrap the strap of the tefillin shel yad on the middle finger of the left arm?", 10, 4
KSA010004260925663, "When [man] puts on tefillin, on which of his fingers does he wrap the strap of the tefillin shel yad?", 10, 4
KSA010004260925664, "When [man] puts on tefillin, on which part of his middle finger does he wrap the strap of the tefillin shel yad?", 10, 4
KSA010005260925665, "When [man] is about to put on tefillin, he takes the tefillin shel rosh out of his tefillin bag first. Does he put on the tefillin shel rosh first?", 10, 5
KSA010005260925666, "When [man] is about to put on tefillin, he takes the tefillin shel yad out of his tefillin bag first. Does he put on the tefillin shel yad first?", 10, 5
KSA010006260925667, "Can [man] wear his tefillin shel yad over a [something that goes on top of the skin of someone's arm] on his arm?", 10, 6
KSA010006260925668, "Can [man] wear his tefillin shel rosh on his head over his [something that goes on the head right over the skin or hair]?", 10, 6
KSA010006260925669, "[man2] just got a haircut and his hair is short. Can he wear his tefillin shel rosh properly?", 10, 6
KSA010006260925670, "[man3] has been growing out his curly hair and it has gotten long. Can he wear his tefillin shel rosh properly?", 10, 6
KSA010007260925671, "What is the knot of [man]'s tefillin shel yad supposed to touch on [man]'s body and tefillin?", 10, 7
KSA010007260925672, "After [man] puts his tefillin away, how is the knot of the tefillin shel yad supposed to be positioned?", 10, 7
KSA010007260925673, "Which side of [man]'s tefillin shel yad should the yud of the knot go on?", 10, 7
KSA010007260925674, "The strap of [man]'s tefillin shel yad is attached to the tefillin bayis where it passes through part of the tefillin base that extends out from the bayis. When [man] is wearing the tefillin shel yad, on which side of the bayis is the hollow part of the base that the tefillin strap goes thru?", 10, 7
KSA010007260925675, "[man] is [left or right]-handed. When [man] puts on [man2]'s tefillin shel yad on [man]'s arm that [man] usually wears tefillin on, the yud knot faces away from his body when he orients the tefillin so that the the extension of the base that holds the strap sits above the bayis closer to his shoulder. How should [man] orient the tefillin shel yad when he puts them on his arm?", 10, 7
KSA010007260925676, "[man3] is right-handed. The only tefillin available were tied for [man] who is left-handed. When [man3] puts on [man]'s tefillin, does he need to put them on upside-down?", 10, 7
KSA010007260925677, "[man] is left-handed. The only tefillin available were tied for [man2] who is right-handed. When [man] puts on [man2]'s tefillin, does he need to put them on upside-down?", 10, 7
KSA010008260925678, "[man2] put on the tefillin shel yad. He is going to put on the tefillin shel rosh soon. Can he explain to [man] about the [conversation topic] while he puts them on?", 10, 8
KSA010008260925679, "[man2] and [man] were arguing about the [controversial topic]. [man2] puts on his tefillin shel yad. Can [man2] continue the argument by making gestures with his eyes before he finishes putting on the tefillin shel rosh?", 10, 8
KSA010008260925680, "[man1] and [man3] are putting on tefillin. After they put on the tefillin shel yad, can they snap their fingers at each other before putting on the tefillin shel rosh?", 10, 8
KSA010008260925681, "After putting on the tefillin shel yad, can [man2] wait [a short amount of time] to rest before putting on the tefillin shel rosh?", 10, 8
KSA010008260925682, "[man1] puts on the tefillin shel yad. Before he puts on the tefillin shel rosh, the congregation is called to respond [one of the responses of kaddish or kedusha]. What will [man1] do?", 10, 8
KSA010008260925683, "[man2] puts on the tefillin shel yad. Before he puts on the tefillin shel rosh, he hears [man1] make the beracha of "lehaniach tefillin" on *his* tefillin shel yad. How will [man2] respond?", 10, 8
KSA010008260925684, "[man2] puts on the Rabbenu Tam tefillin shel yad. Before he puts on the Rabbenu Tam tefillin shel rosh, the congregation is called to respond [one of the responses of kaddish or kedusha2]. What will [man2] do?", 10, 8
KSA010008260925685, "[man2] puts on the Rabbenu Tam tefillin shel yad. Before he puts on the Rabbenu Tam tefillin shel rosh, he hears [man1] make the beracha [a beracha]. What will [man2] do?", 10, 8
KSA010009260925686, "[man2] put on the tefillin shel yad. He was about to put on the tefillin shel rosh, but he got distracted by [something compelling that can feel like requires attention] and interrupted to get involved between putting on the tefillin shel yad and shel rosh. What will he do now?", 10, 9
KSA010010260925687, "[man2] is putting on tefillin. Who should he have in mind wants him to put them on?", 10, 10
KSA010010260925688, "[man] is putting on his tefillin. What will [man] have in mind is the number of parashiyot and the reason for that number as he puts on his tefillin?", 10, 10
KSA010010260925689, "[man3] is putting on his tefillin. What will [man3] have in mind are the main concepts written in the tefillin? What will [man3] have in mind as the reason that he is putting on tefillin with these particular concepts written?", 10, 10
KSA010010260925690, "[man4] is putting on tefillin at [a place where one puts on tefillin]. Why will he have in mind that he needs to put on the tefillin on the arm and head specifically?", 10, 10
KSA010010260925691, "[man2] is putting on his tefillin. When he puts on the tefillin, what will he have in mind HKBH wants him to constantly remember, while wearing the tefillin, about what HKBH did with us?", 10, 10
KSA010010260925692, "[man2] is putting on his tefillin because HKBH commanded him to put on tefillin. What does HKBH want [man2] to remember about HKBH's power by wearing tefillin? How often does HKBH want [man2] to remember this by wearing tefillin?", 10, 10
KSA010010260925693, "[man] is putting on his tefillin. As he puts them on, how does he have in mind to change the way he relates to his neshamah and heart?", 10, 10
KSA010010260925694, "When [man] thinks about his neshamah while he puts on his tefillin, where does he know his neshamah is located?", 10, 10
KSA010010260925695, "When [man] thinks about his heart as he puts on his tefillin, what would he say is the function of his heart that connects it to tefillin?", 10, 10
KSA010011260925696, "[man] is unable to put on a tefillin shel yad because [a reason a man cannot put on a tefillin shel yad]. Can he still put on the tefillin shel rosh?", 10, 11
KSA010011260925697, "[man2] is unable to put on the tefillin shel rosh because [a reason a man cannot put on a tefillin shel rosh]. Can he still put on the tefillin shel yad?", 10, 11
KSA010011260925698, "[man2] is putting on the tefillin shel yad and isn't planning to put on the tefillin shel rosh. What berachas will he make on the tefillin?", 10, 11
KSA010011260925699, "[man] is putting on the tefillin shel rosh and isn't going to put on the tefillin shel yad. What berachas will he make on the tefillin?", 10, 11
KSA010012260925700, "[man2] is left-handed. On which arm does he put on the tefillin shel yad?", 10, 12
KSA010012260925701, "[man] [does an everyday chore] with his right arm, [does another everyday motion] with his right arm, and does [another everyday chore] with his right arm. However, he writes [thing that is handwritten]s with his left arm. Which arm does he wear tefillin on?", 10, 12
KSA010012260925702, "[man1] [does an everyday chore1] with his left arm, [does an everyday motion1]  with his left arm, and holds [a tool used for something beside writing] in his left arm. However, he writes with his right arm. Which arm does he put on tefillin with?", 10, 12
KSA010012260925703, "[man] is ambidextrous. Which arm does he put the tefillin on?", 10, 12
KSA010012260925704, "[man] naturally would have written with his right hand. However, he trained himself to write with his left hand. Which arm does he put the tefillin on?", 10, 12
KSA010013260925705, "The straps of [man]'s tefillin shel rosh and tefillin shel yad are both [number from two to fifty] millimeters wide. Are they kosher?", 10, 13
KSA010013260925706, "When [man] puts on his tefillin shel rosh, the straps hang down to his [body part between the chest and knees]. Are the straps long enough?", 10, 13
KSA010013260925707, "[man] is preparing tefillin straps for his tefillin shel rosh. How long should the tefillin shel rosh straps extend?", 10, 13
KSA010013260925708, "How long should the strap of [man]'s tefillin shel yad be?", 10, 13
KSA010013260925709, "The strap on [man]'s tefillin shel yad breaks. How does [man] know whether it is still koshre?", 10, 13
KSA010014260925710, "When [man1] puts on his tefillin, does it matter which side of the strap faces outward?", 10, 14
KSA010014260925711, "As [man] wears his tefillin during [an activity where someone can wear tefillin], the [a region of one of the tefillin straps] flips so that the light side faces outward. What does [man] need to do now?", 10, 14
KSA011001260925712, "[person] buys a new house with [number from two to twenty] doorways. Is it a mitzvah to put a mezuzah in every doorway?", 11, 1
KSA011001260925713, "In [person2]'s new [dwelling], there are [number from two to seven] rooms. Each room has [number from two to eight] doorways. [number from one to three] of the doorways are never used. Do all of the doorways require a mezuzah?", 11, 1
KSA011001260925714, "[a building] has space for [number of people who live in the building] residents, but only [a second number smaller than the first number of people who live in the building] residents still live there. While the building has [number of entrances to the building] entrances, only [smaller number less than the number of entrances to the building] are still needed by the reduced current residents. How many of the entranceways actually need a mezuzah?", 11, 1
KSA011001260925715, "The [kind of building] has a [kind of entranceway] used to load [a kind of delivered object] from [a person or thing that delivers deliveries], but not for the [kind of people who use the building] to actually enter and exit the [kind of building]. Does this [kind of entranceway] require a mezuzah?", 11, 1
KSA011002260925716, "[a courtyard, alley, street, city, or sovereign territory] is surrounded by walls with [size adjective from small to enormous] gates. Do these gates require mezuzahs?", 11, 2
KSA011003260925717, "[person] has a [kind of dwelling] with an entrance. Which side of the entrance does the mezuzah go on?", 11, 3
KSA011003260925718, "[person] attached a mezuzah to a doorway in their [kind of dwelling]. The mezuzah is on the left side of the doorway when facing into the inner room. What will [person] do with this mezuzah? Do they need to make a new beracha?", 11, 3
KSA011003260925719, "[person] is left-handed. They are going to attach a mezuzah to a doorway in their [kind of dwelling2]. Which side of the doorway will they attach the mezuzah?", 11, 3
KSA011004260925720, "There are two [kinds of entranceways] that open into [person2]'s [kind of dwelling] from the outside, into two separate rooms that are used equally often. The two separate rooms are connected by a doorway. Where will [person2] put the mezuzah in the doorway between the two rooms?", 11, 4
KSA011004260925721, "[person]'s [kind of room] and [kind of room2] are connected by a doorway. The [kind of room] and [kind of room2] also each have a [kind of entranceway] going outside. [person]'s [kind of room] is used much more often than his/her [kind of room2]. Where will [person] put the mezuzah in the doorway between the [kind of room] and [kind of room2]?", 11, 4
KSA011005260925722, "[person] attaches a mezuzah in a doorway on the right doorpost, [a fraction more than two thirds and less than thirteen thirteenths] of the way up the height of the entrance, where it is [number from one to ten] tefachim from the lintel. Is [person]'s mezuzah kosher?", 11, 5
KSA011005260925723, "[person4] attached a mezuzah in an entrance on the right side. The entrance is [number from fifteen to fifty] tefachim high and [person4] attached the mezuzah [number less than two thirds the first number] tefachim up from the ground. Is the mezuzah kosher? What will [person4] do with this mezuzah? Does [person4] need to say a new beracha?", 11, 5
KSA011005260925724, "[person] attaches a mezuzah in the upper third of the right side of the entrance to his/her [kind of dwelling], where it is [number between zero and one] tefachim from the lintel. Is the mezuzah kosher? What will [person] do with this mezuzah? Does [person] need to make a new beracha?", 11, 5
KSA011005260925725, "[person] has to put up a mezuzah in an entrance with the sideposts each [length more than one tefach and up to forty tefachim]. Where will [person] attach the mezuzah in the width of the doorpost?", 11, 5
KSA011005260925726, "[person] has an entrance with the sideposts each [number from four to fifteen] inches wide. [person] attached a mezuzah on the right side, [number from one to three] inches from the inner side of the sidepost. Is the mezuzah kosher? What will [person] do with the mezuzah?", 11, 5
KSA011006260925727, "[person1] has a mezuzah scroll. When they roll up the scroll, which edge of the scroll do they roll up first so that it ends up in the middle of the roll, and in which direction is the text rolled?", 11, 6
KSA011006260925728, "[person1] is looking for the mezuzah scrolls in [person]'s [type of dwelling]. Where does [person1] need to look to retrieve the actual scrolls and look at them?", 11, 6
KSA011006260925729, "[person] is putting up a mezuzah in their house in a doorway. What does [person] need to do with their mezuzah scroll after they roll it up to attach it to the doorway?", 11, 6
KSA011006260925730, "[person1] has a mezuzah scroll in a [type of container] that they want to put up in the entrance of their [kind of room that needs a mezuzah]. What will they use to attach the [type of container] to the entrance sidepost?", 11, 6
KSA011006260925731, "When [person1] inserts the mezuzah scroll into the [kind of container for a mezuzah] that will be attached to the doorpost, which side of the mezuzah scroll faces what direction in the container?", 11, 6
KSA011006260925732, "[person] is putting up a mezuzah in an entrance of his/her [kind of dwelling]. When he/she attaches the container containing the mezuzah scroll, how will he/she orient the container on the doorpost?", 11, 6
KSA011006260925733, "[person1] has a doorway in his/her apartment with a door in the doorway. The area of the doorpost in front of the door that isn't flush against the door is very narrow, but there's more space behind the door. Should [person1] attach the mezuzah in front of the door straight upright, or behind the door diagonally like normal?", 11, 6
KSA011006260925734, "[person] puts a mezuzah scroll in a little [kind of small container] and attaches the [kind of small container] up on the doorpost in the right spot using a [thing that can be used to hang something], hanging but not fastened in place. Is this mezuzah kosher?", 11, 6
KSA011006260925735, "[person] puts a mezuzah scroll in a [kind of mezuzah case] and attaches the case to the doorpost with nails on top and bottom. Is this mezuzah kosher?", 11, 6
KSA011006260925736, "[person1] puts a mezuzah scroll in a [kind of mezuzah container[] and uses a nail to connect the container on top to the doorpost. Is this mezuzah kosher?", 11, 6
KSA011007260925737, "[person1] puts a mezuzah up on his/her doorpost. What beracha does he/she need to make?", 11, 7
KSA011007260925738, "[person] has [number from two to ten] doorways that require him/her to attach [number from two to ten] mezuzahs. How many berachas will he/she make?", 11, 7
KSA011007260925739, "[man2] lives in a one-room [kind of dwelling] with one door. The mezuzah of the door falls off one day. Does [man2] need to make a new beracha to reattach it?", 11, 7
KSA011007260925740, "[man2] has a mezuzah in the doorway of his [kind of dwelling or room], and he takes it down to check the text to ensure the writing is proper. When he puts it back up, what beracha does he make?", 11, 7
KSA011008260925741, "[title like Mrs or Dr or prince] [random noun]'s [kind of dwelling place] is surrounded by a wall. At the entrance, there is a large gate for [kind of transportation vehicle] to enter, with a smaller gate next to it for individual people. Sometimes the large gate is closed and the small gate is open, and vice versa. The two gates are separated by a stretch of the wall [a distance between one tefach and four tefachim] in length. Which of the two gates requires a mezuzah? ", 11, 8
KSA011009260925742, "[person2] lives in a [kind of place where things get stolen] and he/she's afraid that some of his/her "friends" might steal his/her mezuzah from the doorpost of his/her [kind of dwelling or kind of room]. How can he/she put up the mezuzah while still keeping it hidden?", 11, 9
KSA011009260925743, "[person] wants to keep his/her mezuzah safe from being stolen, so he/she hide it in a groove [a distance less than a tefach] deep in the doorpost. Is the mezuzah kosher?", 11, 9
KSA011009260925744, "[person] wants to keep his/her mezuzah safe from being stolen, so he/she hides it in a groove [a distance from one tefach to three tefachim] deep in his/her doorpost. Is the mezuzah kosher?", 11, 9
KSA011009260925745, "[person2] hides his/her mezuzah in a groove in his/her doorpost [a distance less than a tefach2] deep to prevent it from being stolen, and then seals up the groove with [something that can be used to cover a groove] and paints over the whole doorpost so that the location of the mezuzah isn't visible. Is this okay?", 11, 9
KSA011009260925746, "[person] hides his/her mezuzah in a groove in his/her doorpost [a distance less than a tefach1] deep and covers the groove with [something that can be used to cover a groove], painting over the whole doorpost with [a clear adhesive liquid] so that it looks nice. Is this okay?", 11, 9
KSA011009260925747, "[person1] lives next door to [person2], who is a thief who steals mezuzahs. [person1] wants to protect his/her mezuzah from being stolen by [person2], but he/she can't hide it in a groove in his/her doorpost because [a reason that a groove cannot be made in a doorpost]. If [person1] hides the mezuzah from [person2] on the inside of the house on the wall right behind the door, is it kosher?", 11, 9
KSA011009260925748, "[person3] is concerned his/her [kind of relationship role] [person4] will steal his/her mezuzah if s/he attaches it visibly outside her/his front door, even if the mezuzah is concealed in a groove and only the location of the groove is visible. If [person3] attaches the mezuzah behind the door on the part of the doorpost that faces the inner part of the doorway, is it kosher?", 11, 9
KSA011010260925749, "The [kind of room] is a half-circle with radius 4 amot. Does it need a mezuzah?", 11, 10
KSA011011260925750, "The doorway of [person]'s [kind of dwelling] has two doorposts each [length between ten tefachim and fifty tefachim] tall, with a beam lying over the top of the entrance. Does [person] put up a mezuzah?", 11, 11
KSA011011260925751, "[person] attaches a mezuzah in a doorway on the right doorpost, three-quarters of the way up the height of the entrance, where it is [one or two] tefachim from the lintel. Is the mezuzah kosher?", 11, 11
KSA010014261101752, "As [man] puts on his [tefillin shel rosh or shel yad], they fall to the ground without being in their case. What must [man] do?", 10, 14
KSA010014261101753, "As [man] takes off his [tefillin shel rosh or shel yad1] and puts them in their case, they fall to the ground in their case. What must [man] do?", 10, 14
KSA010015261101754, "[man] is wearing his tefillin, when he suddenly needs to go to the bathroom. He takes off his tefillin and prepares to go to the bathroom. When he gets back from the bathroom, what berachas does he make when he puts his tefillin back on?", 10, 15
KSA010015261101755, "[man] stopped during [one of the berachas of keriyat shema in the morning] and took off his tefillin to go to the bathroom. When he gets back, when will he put his tefillin back on? What berachas will he make?", 10, 15
KSA010016261101756, "While saying [a part of davening or Torah study topic], does [man] need to remain constantly aware of his tefillin?", 10, 16
KSA010016261101757, "Can [man] eat [a fixed meal] at [time of day while it's light out] before taking off his tefillin?", 10, 16
KSA010016261101758, "At [time of day while it's light out], can Jerry eat [a snack] before taking off his tefillin?", 10, 16
KSA010016261101759, "[man] is very tired at [time of day when it's light out] because [a reason a man might be very tired]. Can he take a quick nap while wearing his tefillin?", 10, 16
KSA010017261101760, "While [man] is saying [part of the siddur said at shacharit] and wearing his tefillin, he remembers that he is wearing his tefillin. What does he have to do next involving his tefilllin?", 10, 17
KSA010017261101761, "[man] touches his tefillin during [part of shacharit] after being reminded of them. Which of his tefillin does he touch first?", 10, 17
KSA010017261101762, "When [man] says the shema while wearing tefillin, what does he do with his tefillin?", 10, 17
KSA010018261101763, "[man] had tefillin that were ruined, but the straps were fine, so he saved the straps. Can he reuse the straps for the tefillin shel yad of another set of tefillin?", 10, 18
KSA010018261101764, "[man2] has a tefillin strap that was previously used for a tefillin shel yad. Can he use it for a tefillin shel rosh?", 10, 18
KSA010018261101765, "[man2]'s tefillin shel yad strap broke near its base by the knot at the bayis. Can he flip around the strap and re-tie the tefillin strap onto the bayis from the end of the tefillin strap that used to be farthest from the bayis?", 10, 18
KSA010018261101766, "[man] has a tefillin shel yad strap that broke near the knot by the bayis. Can [man] reattach the strap by tying the end that used to be closest to the bayis back on to the bayis?", 10, 18
KSA010018261101767, "[man2] has a tefillin shel rosh. Can he retie the tefillin shel rosh strap, moving the knot to a slightly different part of the tefillin strap?", 10, 18
KSA010018261101768, "[man] has a bag that he bought for his tefillin from a person who makes bags for tefillin and has used to keep his tefillin for the last [a duration of time from minutes to years]. He just replaced this bag with a newer tefillin bag. Can he use the older tefillin bag to keep his [something that a person can keep in a small bag] in?", 10, 18
KSA010019261101769, "[man] wants to leave shacharit to go and [do an activity commonly done in the morning]. What does he need to finish saying in the siddur before he can take off his tefillin?", 10, 19
KSA010019261101770, "[man] is at [name of a shul] at shacharit and there is a brit milah right after shacharit. When will [man] take off his tefillin?", 10, 19
KSA010019261101771, "On rosh chodesh [the name of a Jewish month], when will [man] take off his tefillin after shacharit?", 10, 19
KSA010019261101772, "On [one of the days of chol hamoed sukkot], [man] puts on his tefillin for shacharit. When will he take off his tefillin?", 10, 19
KSA010019261101773, "On chol hamoed pesach, [man] comes to [name of a shul] and sits in [an area in shul where one can sit]. [man] puts on his tefillin for shacharit. When will he take them off?", 10, 19
KSA010019261101774, "On chol hamoed pesach, [man2] comes to [name of a shul2] and is the shliach tzibur for shacharit. He puts on his tefillin for shacharit. When will he take them off?", 10, 19
KSA010020261101775, "At the end of shacharit, [man] [either sits or stands] while wearing his tefillin. Will he stand up as he removes them?", 10, 20
KSA010020261101776, "After shacharit, [man] is ready to start taking off his tefillin. Which of the two tefillin does he start to handle first?", 10, 20
KSA010020261101777, "After shacharit, [man] is ready to start taking off his tefillin. Before he handles the tefillin shel rosh, what will he do with the tefillin shel yad?", 10, 20
KSA010020261101778, "After shacharit, [man] begins taking off his tefillin. Which of his two tefillin will he fully remove first?", 10, 20
KSA010020261101779, "After shacharit, [man2] begins taking off his tefillin. Which hand will he use to remove the tefillin shel yad?", 10, 20
KSA010020261101780, "After shacharit, [man2] begins taking off his tefillin. Which hand will he use to remove the tefillin shel rosh?", 10, 20
KSA010020261101781, "[man] wore his tefillin to shacharit. Can he leave the tefillin on his body all day after shacharit?", 10, 20
KSA010020261101782, "[man2] puts on tefillin in the morning. After shacharit, can [man2] [do an everyday activity] before taking off his tefillin?", 10, 20
KSA010020261101783, "[man] goes to shul and puts on his tefillin. Although he has finished shacharit, the sefer Torah is out in front of the congregation. What does [man] need to do to take off his tefillin?", 10, 20
KSA010020261101784, "[man2] davens at the same minyan as his rav, [a rav]. [man2] has to take off his tefillin because [a reason someone needs to take off his tefillin]. Can he take off his tefillin while [a rav] is in the same room?", 10, 20
KSA010020261101785, "When does [a rav] kiss his actual tefillin?", 10, 20
KSA010020261101786, "At shacharit, [man] puts on his tefillin and then puts on his tallit. After shacharit, will [man] take off his tallit or his tefillin first?", 10, 20
KSA010021261101787, "After shacharit, [man2] puts his tefillin away in a tefillin bag. Based on the way they are stored in the bag, which of the tefillin will [man2] take out first the next day?", 10, 21
KSA010021261101788, "After shacharit, [man3] puts his tefillin away in a tefillin [kind of container that is stored upright]. Which of his tefillin goes on top?", 10, 21
KSA010021261101789, "When [man]'s tallit and tefillin are put away in their respective bags, does [man]'s tefillin bag go inside his tallit bag?", 10, 21
KSA010021261101790, "When [man]'s tallit and tefillin bag are put away inside his tallit bag, which of them goes on top?", 10, 21
KSA010022261101791, "[man] gets to shacharit and realizes he doesn't have tefillin because [a reason a man doesnt have tefillin when he gets to shul]. Should he join the congregation to daven shacharit without tefillin, or wait until after the congregation finishes to borrow someone else's tefillin?", 10, 22
KSA010022261101792, "[man] doesn't have his tefillin, because he [a reason a man who is obligated to wear tefillin doesn't have tefillin]. If he isn't sure he'll be able to get tefillin until [a time in the early morning], should he go ahead now and do the mitzvah of saying shema without tefillin?", 10, 22
KSA010022261101793, "[man2] doesn't have tefillin, because [a reason a man who is obligated to wear tefillin doesn't have them]. If he isn't sure he'll be able to borrow tefillin until [a time in the late morning], should he go ahead now and do the mitzvah of saying shema without tefillin?", 10, 22
KSA010022261101794, "[man3] doesn't have tefillin because [a reason a man3 who needs to wear tefillin doesn't have tefillin]. If it's [a time in the morning], should he look for someone else he can borrow tefillin from, or just go ahead and daven shemoneh esreh?", 10, 22
KSA010022261101795, "[man] said the shemoneh esreh of shacharit without wearing tefillin, because [a reason a man who needs to wear tefillin davened without tefillin]. If his situation changes later that day and tefillin are available, does he still need to put them on?", 10, 22
KSA010022261101796, "[man5] davened shacharit without tefillin, but later in the day he puts on tefillin because he wants to put them on at some point during the day. Since he missed shacharit, does he still make the berachos on putting on the tefillin?", 10, 22
KSA010022261101797, "[man] didn't put on tefillin at shacharit, but puts on tefillin later at [time of day when its light out]. What should he say once he has the tefillin on?", 10, 22
KSA010022261101798, "[man2] didn't put on tefillin on [weekday] at [a time of day when its light out2]. Can he put them on at [a time of night]?", 10, 22
KSA010022261101799, "[man2] gets to shul and it's time for him to put on tefillin, but he doesn't have his own tefillin. [man3]'s tefillin are there, but [man2] can't ask [man3], because [a reason that a man wouldn't be available to be asked a question]. Can [man2] put on [man3]'s tefillin with a beracha?", 10, 22
KSA010023261101800, "[man3] has [feces or urine] on his [body part]. Can he put on tefillin?", 10, 23
KSA010023261101801, "[man4] puts on tefillin and now he needs to fart. What can he do?", 10, 23
KSA010023261101802, "[man2] has diarrhea and is unable to completely stop defecating. Can he put on tefillin?", 10, 23
KSA010023261101803, "[man2] has diarrhea and can keep his body clean from defecating for a few minutes. How will he daven? When will he put on tefillin?", 10, 23
KSA010023261101804, "[man4] is sick with [a sickness]. He doesn't have diarrhea, so his body is clean of feces, but he's hurting and doesn't have a lot of capacity to focus at the moment. Will he put on tefillin at shacharit?", 10, 23
KSA010023261101805, "[man5] is sick with [a painful medical symptom]. His body is clean of urine or feces. He's sick, but he can still focus. Will he put on tefillin today?", 10, 23
KSA010024261101806, "[man2]'s son [man6] is ready for tefillin. Who needs to buy tefillin for [man6]?", 10, 24
KSA010024261101807, "[man7] is [number from six to twelve] years old. When will it be time for him to start wearing tefillin?", 10, 24
KSA010025261101808, "[man2] lives in a town called [name of a town]. Does [man2] wear tefillin on chol hamoed?", 10, 25
KSA010025261101809, "[man1] is davening in [name of a city]. When he puts on his tefillin on chol hamoed, what berachas does he make?", 10, 25
KSA010025261101810, "[man3] is putting on tefillin on chol hamoed. Should he have in mind that he's putting on tefillin as mitzvah objects?", 10, 25
KSA010025261101811, "[man2] puts on his tefillin on chol hamoed without making a beracha. After [man2] puts on the shel yad but before he puts on the shel rosh, [man3] says the whole beracha of [a beracha said during shacharit]. Will [man2] answer amen?", 10, 25
KSA010025261101812, "[man2] puts on his tefillin on chol hamoed without making a beracha. After [man2] puts on the shel yad but before he puts on the shel rosh, [man3] says [a place in kaddish or kedusha where one answers in davening]. Will [man2] answer?", 10, 25
KSA010025261101813, "At [a shul] in [name of a city], the congregation generally wears tefillin on chol hamoed. If [man2] doesn't wear tefillin on chol hamoed, can he daven at [a shul] in [name of a city]?", 10, 25
KSA010026261101814, "[man2]'s tefillin boxes are intact. [man2]'s tefillin haven't been opened and checked in a long time. Can [man2] assume the tefillin are kosher?", 10, 26
KSA010026261101815, "[man]'s tefillin have intact boxes, and [man] assumes they are kosher. Will [man] get them checked?", 10, 26
KSA010026261101816, "[man1] has a set of tefillin that he does not wear often, because [a reason that a set of tefillin is not worn often]. How often must [man1] get this set of tefillin checked?", 10, 26
KSA010026261101817, "[man2]'s tefillin box tore. Will he get the scrolls checked?", 10, 26
KSA010026261101818, "[man3]'s tefillin box was soaked in water. Will he get the scrolls checked?", 10, 26
KSA010026261101819, "[man2]'s tefillin were damaged by [something that can damage tefillin]. [man2] knows they must be checked. However, if [man2] opens up the tefillin and gets them checked, he doesn't know who can reseal them so they can be worn again. Will [man2] keep wearing these tefillin?", 10, 26
KSA011009261101820, "[person] has a mezuzah that he/she doesn't want to put on the outside of his/her doorway, so s/he hides it on the inside of his/her doorway on the side of the right doorpost that faces into the house, [a distance between zero and one tefachim] from the inner margin of the doorway. Is it kosher?", 11, 9
KSA011009261101821, "[person2] attaches his/her mezuzah on the backside of the right doorpost behind the doorway [a distance more than one tefach] from the inner margin of the doorway. Is it kosher?", 11, 9
KSA011010261101822, "[person3]'s [kind of room] is rectangular measuring [dimensions of a rectangle with area less than sixteen square amot]. Is it obligated in a mezuzah?", 11, 10
KSA011010261101823, "[person4]'s [kind of room] is a rectangle measuring [length at least four amot] by [length at least four amot2]. Does it need a mezuzah?", 11, 10
KSA011010261101824, "[person]'s [kind of room] is a rectangle measuring [a length between two and three amot] by [a length between eight and twenty amot]. Does it need a mezuzah?", 11, 10
KSA011011261101825, "The doorway into [person]'s [kind of room] is trapezoidal: the left doorpost is [a length less than ten tefachim] high, and the right doorpost is [a length more than ten tefachim] high. Thus the lintel is on an angle. Does this doorway require a mezuzah?", 11, 11
KSA011011261101826, "The doorway into [person]'s [kind of room] is trapezoidal: the left doorpost is [a length more than ten tefachim2] high, and the right doorpost is [a length more than ten tefachim] high. Thus the lintel is on an angle. Does this doorway require a mezuzah?", 11, 11
KSA011011261101827, "The wall around the area surrounding [a dwelling obligated in a mezuzah] has a gap [a distance less than twenty tefachim] wide for people to enter the clearing. Does this gap require a mezuzah?", 11, 11
KSA011011261101828, "[person]'s [kind of room] entrance is built into a [kind of wall] wall. The entrance doesn't have doorposts, just a cut-out of the wall that the door fits into. Does this entrance need a mezuzah?", 11, 11
KSA011011261101829, "[person]'s [kind of room] is separated from the [kind of room2] by an entranceway. Facing into the [kind of room], the entranceway is bordered on the left by a wall, perpendicular to the entranceway, that extends along the outside of the [kind of room2] and [kind of room]. On the right side of the entranceway, a wall extends parallel to the entranceway, forming the separation itself between the  [kind of room2] and [kind of room]. Does this entrance need a mezuzah?", 11, 11
KSA011011261101830, "[person]'s [kind of room1] is very large. [person] decides to divide the room into two new rooms and builds a new wall in the [kind of room1] that extends from the left wall of the [kind of room1] toward the right wall, leaving a gap between the right wall and the right edge of the new wall. Does this gap need a mezuzah?", 11, 11
KSA011011261101831, "[a talmid chacham] isn't sure if a mezuzah is required for his [door], because there are different opinions brought down from the Torah. When [a talmid chacham] attaches the mezuzah to his [door], does it need a beracha? How will he make a beracha on it?", 11, 11
KSA011012261101832, "[person4]'s [kind of room] entrance is arched, and at a point [a length more than ten tefachim] high, the entrance remains [a length more than four tefachim] wide. Does the entranceway require a mezuzah?", 11, 12
KSA011012261101833, "[person5] built a little [kind of room] for his [family member] [name], with an arched entranceway that remains four tefachim wide at a height of ten tefachim. Does this entrance require a mezuzah?", 11, 12
KSA011012261101834, "[person]'s [kind of room] has an entranceway 4 tefachim wide and 10 tefachim high. The top of the entranceway is arched. Where will [person] attach the mezuzah?", 11, 12
KSA011012261101835, "[person2]'s [commercial product] shop has a single entrance located on the [direction] side of the building. The entranceway is rather tall and while the [left or right] doorpost goes straight up to the lintel, the other doorpost goes up only [a length at least an amah] before turning horizontally in the wall, extending into the wall [a length at least an amah2], and then continuing up to meet the lintel. Does [person2] need to put up a mezuzah?", 11, 12
KSA011012261101836, "[person4] has a store where he/she sells [a commercial product]. Customers come in the front door, which has a normal right doorpost. However, the left doorpost of the front door extends up from the ground [a distance at least two tefachim], inward horizontally [a length at least one amah] into the wall, and then continues upward to meet the lintel. Where would [person4] put up a mezuzah?", 11, 12
KSA011012261101837, "[person5] runs a [kind of shop] in the [first floor or basement or tenth floor et cetera] of the [name of a building]. The shop has a single entrance into the [name of a building] [parking lot or front yard or other outer area of a building]. The left doorpost extends straight up to the lintel, while the right doorpost extends upward [a length at least ten tefachim] up from the ground, then inward [a length at least an amah] horizontally into the wall, and then continues upward [a length at least four tefachim] to the lintel. Where does [person5] put the mezuzah for this doorway?", 11, 12
KSA011012261101838, "[person6] owns a shop in [an area of town] selling [a commercial product2]. The single entrance into the [a commerical product2] shop is a wide doorway, with the left doorpost extending up to the lintel directly. The right doorpost extends upward [a length less than ten tefachim] from the ground, then extends horizontally into the wall [a length at least one amah], and then continues upward [a length at least ten tefachim] to the lintel. Where does [person6] put the mezuzah for this doorway?", 11, 12
KSA011013261101839, "The entrance from [person7]'s [kind of room] to his/her [kind of room2] doesn't have a door. Does it need a mezuzah?", 11, 13
KSA011013261101840, "When [two people] move into their [kind of dwelling place], the doorway into their [kind of living space room] is missing a door. Can they put up the mezuzah before the door is put up?", 11, 13
KSA011013261101841, "[man3] puts up a mezuzah in the doorway between the [kind of room] and the [kind of room2] of his new house. Since the house is still under construction, there isn't a lintel over the doorway--the doorway just consists of posts on either side. Is the mezuzah kosher?", 11, 13
KSA011013261101842, "[person] is doing some work on his/her [kind of dwelling], and there is an entrance from his/her [kind of room1] into his/her [kind of room2]. The left doorpost and wall of the entrance are removed temporarily. After the work is finished, the left doorpost and wall are put up again. Is the mezuzah kosher?", 11, 13
KSA011013261101843, "[person2] is building a [kind of dwelling], and there is an entrance from the [kind of room2] into the [kind of room3]. The left doorpost and wall of the entrance have not yet been added. The mezuzah is put up on the right doorpost. Is the mezuzah kosher?", 11, 13
KSA011013261101844, "[person] is putting up a one-room house for [a group of people]. He puts up the front wall of the house and the side wall of the house, but leaves the back wall for last since it's gonna be made of a different material. Therefore, he cuts out the doorway and installs the door for the front of the house while the back wall still isn't installed. He puts up a mezuzah on the front door. Is it kosher?", 11, 13
KSA011014261101845, "[person1] builds a temporary [kind of house] to use for [something that a temporary house is used for]. Does this [kind of hoiuse] need a mezuzah?", 11, 14
KSA011014261101846, "[person2] puts up a sukkah for sukkot in [month of the year] and puts up a covering of [something that can be used for sukkah schach] after Yom Kippur on the sukkah. When should he put up the mezuzah?", 11, 14
KSA011014261101847, "[place] has a [kind of seasonal sales event]. Like the rest of the traders, [person2] puts up a temporary shop at the [kind of seasonal sales event] for his commercial dealings. Does this shop need a mezuzah?", 11, 14
KSA011014261101848, "[place2] has an outdoor marketplace where sales events occur seasonally. For most of the year, the marketplace is abandoned. [person3] has a shop that he put up in this marketplace and that he uses for sales of [kind of commerical goods] during the seasonal sales events. Does this shop need a mezuzah?", 11, 14
KSA011014261101849, "[place3] has a [kind of place where a commercial establishment would be located year-round]. [person4] has a shop where he/she sells [kind of commercial goods2] in this [kind of place where a commercial establishment would be located year-round]. Does his/her shop require a mezuzah?", 11, 14
KSA011015261101850, "[person5] sells [kind of commercial goods sold outdoors], and he/she puts up a stand to sell the [kind of commercial goods sold outdoors]. The stand has three walls and an open fourth side with columns holding up the ceiling on the fourth side. Does the opening of the fourth side get a mezuzah?", 11, 15
KSA011015261101851, "[person5] builds a rectangular stand with four sides. Three of the sides are fully enclosed by a wall. On the fourth side, two columns hold up the roof, which is [height of the roof0859]. A wall [a second height less than the first height0859] tall connects the bottom halves of the columns to the walls of the 1st and 3rd sides of the stand. Does the opening between the columns need a mezuzah?", 11, 15
KSA011015261101852, "[person6] builds a stand for selling [kind of animals or plants]. The stand has three walls and on the fourth side with two columns holding up the roof. The columns holding up the fourth side are connected to the walls of the other sides by a short wall that doesn't reach the ceiling and is lattice-like and full of holes. Does the entranceway on the fourth side between the columns require a mezuzah?", 11, 15
KSA011016261101853, "The courtyard of [a specific building] has a small room located near the entrance where [person1] the guard stays. Does this room need a mezuzah?", 11, 16
KSA011016261101854, "An enclosed stairway leads from the base of [something tall that needs a stairwell that is not a building] up to the top of [something tall that needs a stairwell that is not a building]. Do the entrances of this stairway need mezuzahs?", 11, 16
KSA011016261101855, "Mrs. [noun] has a [kind of garden] surrounded by [a kind of wall]s that are covered with [kind of plant that can climb on walls]. Does the doorway to the [kind of garden] need a mezuzah?", 11, 16
KSA011016261101856, "[person2] builds a [kind of building that animals can live in] for his [kind of animal]s to live in. Does the doorway into this [kind of animal] [kind of building that animals can live in] need a mezuzah?", 11, 16
KSA011016261101857, "[person]'s [kind of room that needs a mezuzah] opens into the watchhouse used by guards of [an organization of guards]. Do the outer doorways of the watchhouse need a mezuzah?", 11, 16
KSA011016261101858, "An enclosed stairway leads from [an area that does not require a mezuzah for its entrances] [down or up] to the door to [a room or area that does require a mezuzah for its entrances]. Does this stairway need a mezuzah?", 11, 16
KSA011016261101859, "[person1]'s garden is entirely surrounded by the side of [person1]'s [kind of building that requires a mezuzah] on one side and a [kind of garden fence] on all other sides. A [kind of doorway] allows [person1] to leave the enclosed part of his/her garden and venture into the [kind of outdoor area] beyond. Does this [kind of doorway] require a mezuzah?", 11, 16
KSA011016261101860, "When [person2] walks out his/her side door past his/her [kind of room that requires a mezuzah], s/he ends up in the [kind of animal enclosure] built against the side of his/her [kind of room that requires a mezuzah]. S/he walks through the [kind of animal enclosure] and out its main door to get to his/her [kind of transportation vehicle]. Does the main door of the [kind of animal enclosure] need a mezuzah?", 11, 16
KSA011016261101861, "[person]'s [kind of room that requires a mezuzah] has a door that opens out into a porch, and the porch also has an entrance that connects it to the [a kind of open area that isnt enclosed]. Does the entrance of the porch need a mezuzah?", 11, 16
KSA011016261101862, "A doorway is built along the side of [a large area that is enclosed up to a whole country in size]. Does this doorway require a mezuzah?", 11, 16
KSA011016261101863, "The [a kind of person]s of [an organization that people belong to] build ten rooms connected to each other, each connected to the next room with a doorway, and with its own door to the outside. One of these rooms on one end is a [kind of room that requires a mezuzah]. Which of the doorways need a mezuzah?", 11, 16
KSA011016261101864, "[person] has a [kind of garden]. The garden is connected by a gate to a courtyard where [person2] lives in his/her house. Does this gate need a mezuzah?", 11, 16
KSA011016261101865, "[person] owns a gatehouse at the entrance to [a facility or area that has an entrance]. The gatehouse isn't connected to any other buildings except by a wall. Does the gatehouse get a mezuzah? Is a beracha said on the mezuzah?", 11, 16
KSA011016261101866, "In the middle of [an open area that isn't enclosed], a tower rises up very tall. Several flights of stairs allow someone to reach the top. Should the entrance of the stairwell get a mezuzah?", 11, 16
KSA011017261101867, "[person] has a bathhouse that s/he operates as a business. Does s/he need to install a mezuzah on it?", 11, 17
KSA011017261101868, "[person2] has a tannery where s/he processes leather from [kind of animal] that come from around [a region of the world]. Does the tannery entrance need a mezuzah?", 11, 17
KSA011017261101869, "[the owner of a mikvah] has a mikveh in a [adjective describing a building] building near the [kind of building]. Does the mikvah building need a mezuzah?", 11, 17
KSA011017261101870, "[person3] has a stable near his/her house where s/he keeps his/her oxen. Does s/he put up a mezuzah for the entrance to this stable? Will s/he say a beracha when the mezuzah is attached?", 11, 17
KSA011017261101871, "[person4] has a room in his/her [a private open area that isn't usually enclosed] where s/he raises [kind of bird]s. Will [person4] put up a mezuzah in this room? Will s/he say a beracha when the mezuzah is attached?", 11, 17
KSA011017261101872, "[person] has a room in his/her house where s/he stores straw. Will [person] attach a mezuzah to the entrance to this room? Will [person] make a beracha when s/he attaches the mezuzah?", 11, 17
KSA011017261101873, "[person] has a room for storing wood. Will [person] attach a mezuzah to the entrance to this room? Will [person] make a beracha when s/he attaches the mezuzah?", 11, 17
KSA011017261101874, "[person1] has a room used to store [a kind of drink]. Will [person1] put up a mezuzah in this room's entrance? Will [person1] make a beracha on putting up the mezuzah?", 11, 17
KSA011018261101875, "[person2] has a room where his/her two babies [person3] and [person4] [verb for an activity that babies do] during the day. What will [person2] make sure to do with the mezuzah for this room?", 11, 18
KSA011018261101876, "[person2] and is/her family sometimes bathe in [a piece of equipment that people bathe in] in [person2]'s [kind of room that needs a mezuzah]. What will [person2] make sure to do with the mezuzah for this room?", 11, 18
KSA011018261101877, "[person1] sometimes urinates in [person]'s [kind of room that requires a mezuzah]. What will [person1] make sure to do with the mezuzah in [pesron]'s [kind of room that requires a mezuzah]?", 11, 18
KSA011018261101878, "[person1] designated the [kind of room that normally requires a mezuzah] of his/her [dwelling where a person lives] as the room for urination. Will [person1] put up a mezuzah in the [kind of room that normally requires a mezuzah]?", 11, 18
KSA011018261101879, "When [person] wants to bathe in his/her family's [dwelling place], s/he bathes in the [implement used by a person to wash his or her naked body] in his/her [kind of room that normally requires a mezuzah1]. Will [person] put up a mezuzah in the entrance to his/her [kind of room that normally requires a mezuzah1]?", 11, 18
KSA011019261101880, "[person] shares a [kind of room that normally requires a mezuzah] with [person6], who is a [kind of non Jew]. Will [person] make sure there is a mezuzah in the entrance to the shared [kind of room that normally requires a mezuzah]?", 11, 19
KSA011019261101881, "[person7], [person8], and [person9] each have a [kind of dwelling] along a shared courtyard. [person7] and [person8] are Jewish, but not [person9]. Will [person7] and [person8] put up a mezuzah in the entrance to the courtyard?", 11, 19
KSA011020261101882, "[person1] has a door to his/her [kind of room that is located underground] that is horizontal against the ground in his/her [kind of flat area inside or outside near or within a house]. Will [person1] make sure to put up a mezuzah on the right post of this doorway?", 11, 20
KSA011021261101883, "[person9] is renting a [kind of dwelling place that a person can rent] in [place outside of eretz yisrael that people live]. Does s/he need a mezuzah for his/her [kind of dwelling place that a person can rent] entrance after living in the [kind of dwelling place that a person can rent] for [number from one to twenty-nine] days?", 11, 21
KSA011021261101884, "[person1] is renting a [kind of dwelling place that a person can live in] in [place outside of eretz yisrael]. S/he moved in [an amount of time more than thirty days] ago. Does s/he need to put up a mezuzah in the main doorway between his/her [kind of room that requires a mezuzah] and [kind of room generally found in a home]?", 11, 21
KSA011022261101885, "[person2] and his/her family are moving out of their house in a week, and [person3]'s family is moving in. Should [person2] and his/her family take the mezuzos of the house with them when they move out?", 11, 22
KSA011022261101886, "The [last name] family is moving out of their [kind of dwelling place] and leaving their mezuzos for the [last name2] family that is moving in next. What do the [last name2] family need to do in exchange for receiving the mezuzos of the [last name] family?", 11, 22
KSA011023261101887, "[person] walks thru the entrance of his/her [kind of room that needs a mezuzah] on the way to [verb, do something important]. What does s/he notice when s/he passes thru the entrance?", 11, 23
KSA011023261101888, "When [person2] notices the mezuzah scroll as s/he passes thru the entrance of his/her [kind of room that needs a mezuzah] to [verb, something done in that kind of room], what will s/he become aware of?", 11, 23
KSA011023261101889, "When [person3] notices the mezuzah scroll in the entrance of his/her [kind of building that needs a mezuzah] as s/he passes thru to [verb, do a common activity done in that kind of building], how will s/he feel about her relationship to Hashem?", 11, 23
KSA011023261101890, "[person2] is [adjective, a feeling that a person gets] and is on his/her way to [verb, an action that a person does due to this strong feeling]. S/he passes thru the entrance to his/her [place that requires a mezuzah on its entrance] and notices the mezuzah on the [place that requires a mezuzah on its entrance] [kind of entrance for the aforementioned kind of place]. How does this affect his/her level of mindfulness?", 11, 23
KSA011023261101891, "[person3] is thinking about [a futile distraction in life]. S/he passes thru the entrance of his/her [kind of room that gets a mezuzah in a person's house] and notices the mezuzah. How will this affect his/her thoughts about the [a futile distraction in life]?", 11, 23
KSA011023261101892, "[person2] is thinking about how s/he wants to achieve [an accomplishment that a person might value]. S/he passes thru the entrance of his/her [kind of room or dwelling that needs a mezuzah at the entrance] and notices the mezuzah. How does this affect his/her thinking about wanting the accomplishemnt of [an accomplishment that a person might value]?", 11, 23
KSA011023261101893, "[person] passes thru the doorway to his/her [kind of room that gets a mezuzah on the entrance] and notices the mezuzah. [person2] asks [person] how important it is to [person] to do [a task that people might expect a person to complete in life]. What will [person] say?", 11, 23
KSA011023261101894, "[person2] is upset that s/he is having trouble getting to [something that a person thinks he/she needs to be successful in life]. S/he notices the mezuzah when s/he walks thru the doorway of the [kind of room that has a mezuzah]. How long does s/he expect that it will matter to him/her if s/he gets [something that a person thinks he/she needs to be successful in life]?", 11, 23
KSA011024261101895, "[person] leaves his/her [kind of dwelling] to [verb, activity that a person does outside the house]. When s/he passes the mezuzah, what will s/he do with his/her body?", 11, 24
KSA011024261101896, "[person] gets back home from [an activity usually done outside the house] and enters the front door of the [kind of dwelling]. What will s/he do with his/her body as s/he passes the mezuzah?", 11, 24
KSA011024261101897, "When [person] kisses the mezuzah in the doorway of their [kind of dwelling], which part of the mezuzah will they kiss?", 11, 24
KSA011024261101898, "[person] leaves their [kind of dwelling2] to go to [place outside the home someone commonly travels to]. When they pass the mezuzah and touches it, what will they say?", 11, 24
KSA011025261101899, "The mezuzah in [a building owned communally] belongs to [person]. How often does the mezuzah need to be checked?", 11, 25
KSA011025261101900, "[person2] puts up a mezuzah in the entrace to his/her [kind of room in a dwelling that needs a mezuzah]. How often does this mezuzah need to be checked?", 11, 25
KSA011025261101901, "The Jewish community of [place] puts up a mezuzah in their shul. How often does this mezuzah need to be checked?", 11, 25
KSA011025261101902, "[person] borrows a mezuzah for his/her [kind of dwelling place] from [a communal organization that could lend someone a mezuzah]. How often does this mezuzah need to be checked?", 11, 25
KSA012001261101903, "[person]'s new job requires him/her to meet every [time of day] with [an important official]. What does s/he wear to the meetings? How does this compare to what s/he wears when s/he goes to daven?", 12, 1
KSA012001261101904, "[person] normally davens at [a shul], but today s/he had to daven at home because [a reason that a person has to daven at home and cannot come to shul]. What does s/he wear to daven at home today? How does that compare to what s/he'd wear to daven if s/he went to shul?", 12, 1
KSA012001261101905, "[man] goes to daven [one of the prayer services] at [a shul2], where the minhag is that a special belt is worn for davening. Can [man] daven without a special belt?", 12, 1
KSA012002261101906, "[man] wakes up in the morning and has [number from one to twenty] dollars in his wallet ready to give to tzedaka. When is a good time for him to give the money to tzedaka?", 12, 2
KSA012002261101907, "Before every tefilah, what mitzvah will [person] be mekabel and what will s/he have in mind?", 12, 2
KSA012002261101908, "How often is [man2] mekabel the mitzvah of loving his fellow as himself?", 12, 2
KSA012002261101909, "When [man3] starts davening [one of the prayer services], how much does he love [man]?", 12, 2
KSA012002261101910, "[man], [man2], and the rest of their shul are davening [one of the prayer services]. If they care about one another and have good relationships, how does that impact the way Hashem receives their tefillos?", 12, 2
KSA012002261101911, "[man3], [man4], and the rest of their shul are davening [one of the tefilah prayer services]. If they generally ignore each other and don't really connect, how does that impact the way Hashem receives their tefillos?", 12, 2
KSA012003261101912, "[person] is getting ready to daven [one of the tefilah services]. What does s/he need to check about his/her body before s/he davens?", 12, 3
KSA012003261101913, "[man2] goes to shul for [one of the prayer services] and as soon as he arrives and starts davening he realizes he needed to [urinate or defecate]. What should he have done differently?", 12, 3
KSA012003261101914, "As the congregation is beginning to daven [one of the tefilah services] at [name of a shul], [man2] realizes he slightly needs to [urinate or defecate]. Can he keep davening and [urinate or defecate] after the tefilah?", 12, 3
KSA012003261101915, "[man] feels a slight need to [urinate or defecate2]. Can he keep learning [an area of Torah study]?", 12, 3
KSA012003261101916, "[person] needs to [urinate or defecate]. Under pressing circumstances, s/he would be able to wait [an amount of time from forty-five minutes to three hours] before s/he would need to [urinate or defecate]. S/he goes ahead and davens [one of the tefilos]. Does s/he need to daven [one of the tefilos] again after s/he [urinate or defecate]s?", 12, 3
KSA012003261101917, "[man] really needs to [urinate or defecate]. He goes ahead and davens [one of the required tefillos] anyway. Afterward, he realizes that he wouldn't have been able to wait another 72 minutes after he davened without needing to [urinate or defecate], because he ended up needing to [urinate or defecate] after only [an amount of time from one minute to seventy minutes]. Does he need to daven [one of the required tefillos] again? Does he need to do teshuvah for davening while he needed to [urinate or defecate]?", 12, 3
KSA012003261101918, "[man2] needs to daven [one of the required daily tefillos], and he also needs to [urinate or defecate2]. If he thinks he can wait [an amount of time from seventy to five hundred minutes] until he would absolutely need to [urinate or defecate2], can he daven [one of the required daily tefillos] first?", 12, 3
KSA012003261101919, "[man3] needs to [urinate or defecate]. In an emergency he could wait another [an amount of time more than seventy minutes] to [urinate or defecate]. [man3] also needs to daven [one of the daily tefillos]. If he waits until after he gets to [urinate or defecate] to daven [one of the daily tefillos], [man3] will miss the halachic time for davening [one of the daily tefillos]. Should [man3] [urinate or defecate] and miss davening [one of the daily tefillos], or daven [one of the daily tefillos] and then [urinate or defecate]?", 12, 3
KSA012004261101920, "[man2] has a problem with farting. He knows that if he starts saying [one of the required shemone esreh tefillos], he won't be able to get thru saying all of [one of the required shemone esreh tefillos] without farting. Should he go ahead and say [one of the required shemone esreh tefillos], or should he miss davening [one of the required shemone esreh tefillos] altogether unless his farting problem goes away?", 12, 4
KSA012004261101921, "[man] has a problem with farting. He knows that if he starts saying kriyas shema on [day of the week] [morning or night], he won't be able to get thru saying all of kriyas shema without farting. Should he go ahead and say kriyas shema, or should he miss saying kriyas shema unless his farting problem goes away?", 12, 4
KSA012004261101922, "[man] couldn't stop farting long enough to daven [one of the three daily tefillos], so he skipped saying [one of the three daily tefillos], and now it's time for the following tefillah. What does [man] need to do to fix this?", 12, 4
KSA012004261101923, "[man] has trouble keeping himself from farting and can't go without farting long enough to say the Shema and its berachos at Shacharit. However, he can manage to go without farting just long enough to say the 3 paragraphs of the Shema. Will [man] put on tefillin? When will he put them on and take them off? Will he make berachas on the tefillin?", 12, 4
KSA012005261101924, "[man]'s hands are clean. Does he need to wash them with water before davening [one of the three daily tefillos]?", 12, 5
KSA012005261101925, "[man2] washed his hands this morning with water up to the wrist. Later, he used his fingers to rub his [body part normally covered by clothes]. Does he need to wash his hands again before [one of the required tefillos]?", 12, 5
KSA012005261101926, "[man] washsed his hands this morning with water up to the wrist. Later today, he scratched his head. Does he need to wash his hands again before [one of the daily tefillos]?", 12, 5
KSA012005261101927, "[man2] washed his hands this morning with water past his [an anatomical part of the hand] but not up to his wrist. Does he need to wash his hands with water up to his wrist before davening [one of the daily tefillos2]?", 12, 5
KSA012005261101928, "[man3] is travelling from [place] to [place2]. He plans to stop and spend several hours in a small town called [name of town] on the way. It's time for [one of the three daily tefillos], but he doesn't have water to wash his hands. If he travels another [amount of time less than seventy minutes] toward [place2], he can get water to wash his hands before he needs to daven [one of the three daily tefillos]. Can he stay and daven in [name of town] without water?", 12, 5
KSA012005261101929, "[man3] is travelling from place1] to [place3]. He plans to stop and spend several hours in a small town called [name of town2] on the way. It's time for [one of the three daily tefillos], but he doesn't have water to wash his hands. If he travels another [amount of time from seventy to three hundred minutes] toward [place3], he can get water to wash his hands before he needs to daven [one of the three daily tefillos]. Can he stay and daven in [name of town2] without water?", 12, 5
KSA012005261101930, "[man] is travelling from [place2[ to [place4] and doesn't have water to wash his hands for tefillah. As long as he stays on his route to [place4], he won't be able to get water for washing, but if he goes [amount of time more than eighteen minutes] off the route he can probably find a [kind of building with water] or something to wash his hands. Will he go out of his way to wash his hands before tefillah?", 12, 5
KSA012005261101931, "When it's time to daven [one of the three daily tefillos], [man] can't wash his hands because [a reason that a man cannot get water to wash his hands at shul]. If he can get water to wash his hands before [one of the three daily tefillos] if he goes [amount of time up to eighteen minutes] away to a different shul, will he do that?", 12, 5
KSA012007261101932, "[man] davens [one of the tefillos] with a minyan at [a place where a minyan is held]. Will HKBH potentially scorn [a man]'s prayers?", 12, 7`;






































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































