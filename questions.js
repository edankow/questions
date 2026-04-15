// This constant holds the raw data for the study tool
const rawCsvData = `ID,Question,Chapter,Paragraph
KSA001001260221002, "[person] is [doing activity]. Can HKBH see them?", 001, 001
KSA001001260317003, "How often does [person2] think about Hashem while [doing activity]?", 001, 001
KSA001002260221003, "[person2] wakes up. What do they notice promptly?", 001, 002
KSA001002260221004, "Should [person2] say modeh ani after waking before they wash their hands?", 001, 002
KSA001002260221005, "What should [person] say immediately after waking up in the morning?", 001, 002
KSA001003260221006, "[public figure] mocks [person] for keeping the mitzvah of [mitzvah]. How should [person] feel in response?", 001, 003
KSA001004260221007, "From most to least valuable for [person1], rank staying in bed when they’re tired, getting [number] thousand dollars, or getting up to learn Torah or daven.", 001, 004
KSA001004260221008, "Is it more important for [person] to [do something for avodas Hashem], or to [do something that results in material gain or avoids material loss]?", 001, 004
KSA001004260221009, "It’s time for [person] to get up but it’s cold. Do they need to get up immediately?", 001, 004
KSA001004260221010, "It’s time for [person2] to get up but they aren’t sure if they slept enough yet. Do they get up anyway?", 001, 004
KSA001005260221011, "[man] is awake at [time of night] studying [a part of Torah]. What does he have to do to become a worker for Hashem?", 001, 005
KSA001005260221012, "When can [person] say tikun chatzot?", 001, 005
KSA001005260221013, "When is the best time for [man2] to get up in the morning?", 001, 005
KSA001006260221014, "Can [person] say [part of tanach] from memory?", 001, 006
KSA001006260221015, "If [person3] is blind, can they say [part of tanach] from memory?", 001, 006
KSA001007260221016, "[person] is saying Maamados and gets to the end where it finishes ברוך אתה ה' שומע תפלה. What ending beracha should [person] say?", 001, 007
KSA002001260221017, "[person2] wakes up with tumah energy on their fingers. How do they remove the energy?", 002, 001
KSA002001260221018, "After [person] wakes up in the morning, can [person] travel to [place] before washing their hands?", 002, 001
KSA002002260221019, "Can [man2] go from [place1] to [place2] without wearing tzitzit?", 002, 002
KSA002002260221020, "Does [man] wear tzitzit while [doing activity] in [a place]?", 002, 002
KSA002003260221021, "[person] doesn't have enough water to wash their whole hands when they get up in the morning. How much of their hands do they need to wash?", 002, 003
KSA002003260221022, "Does [person3] rinse their mouth in the morning?", 002, 003
KSA002003260221023, "Does [person3] wash their face in the morning?", 002, 003
KSA002003260221024, "How many times does [person] pour water on each hand after waking up?", 002, 003
KSA002003260221025, "When [person] washes their hands in the morning, which hand does [person] use to pick up the washing cup first?", 002, 003
KSA002003260221026, "Which hand does [person] wash first in the morning?", 002, 003
KSA002004260221027, "[person2] needs to make [pasta dish]. Can [person2] use the water from washing their hands when they wake up?", 002, 004
KSA002004260221028, "After [person] washes their hands upon waking, can they use the water from their hand-washing for [task that requires water]?", 002, 004
KSA002005260221029, "Before [person] washes their hands in the morning, can they touch their [a body opening]?", 002, 005
KSA002005260221030, "Before [person] washes their hands in the morning, can they touch their [food item]?", 002, 005
KSA002006260221031, "[person] is in [a place without access to water]. What should they do to prepare their hands for shacharit?", 002, 006
KSA002006260221032, "[person1], before tefillah, wipes his hands on [something]. Does he wash his hands with water when [person2] comes with [a container] of water a bit later?", 002, 006
KSA002006260221033, "[person2] washes their hands for shacharit by pouring [adjective] water on them out of [a kind of thing that can hold liquid]. Can they make a beracha?", 002, 006
KSA002006260221034, "[person2] washes their hands with soap and water before shacharit. Do they make a beracha?", 002, 006
KSA002006260221035, "If [person1] doesn’t have access to any water, how should they wash their hands before tefillah?", 002, 006
KSA002006260221036, "[person1] washes before shacharis with water from [a source of flowing water]. What bracha should they make?", 002, 006
KSA002006260221037, "If [person1] washes their hands before tefillah with [a source of flowing water], do they still need to wash their hands later?", 002, 006
KSA002006260221038, "If [person1] wipes their hands before tefillah on a [thing] instead of washing them with water in the morning, what bracha should they make?", 002, 006
KSA002006260221039, "When [person] gets to shacharit, there isn’t a washing cup. How will [person] prepare their hands for tefilah?", 002, 006
KSA002007260221040, "[Person] needs to urinate. Can they say [a beracha] first?", 002, 007
KSA002007260221041, "[person1] is hungry and needs to urinate. Can they say a beracha and eat and then urinate?", 002, 007
KSA002007260221042, "[Person2] needs to defecate. Can they say [a beracha2] first?", 002, 007
KSA002008260221043, "[person] sleeps for [number] minutes during the day. Should they wash their hands when they wake up like they normally do in the morning?", 002, 008
KSA002008260221044, "[person] stays awake all night. Should they wash their hands normally in the morning?", 002, 008
KSA002008260221045, "[person] woke up and washed their hands properly while it was still night. Do they need to wash their hands again after dawn?", 002, 008
KSA002009260221046, "[person] leaves a cemetary. Do they need to wash their hands afterward?", 002, 009
KSA002009260221047, "[person] touches their [a body part]. Do they need to wash their hands afterward?", 002, 009
KSA002009260221048, "[person] trims the nail of their left pointer finger. Do they need to wash their hands afterward?", 002, 009
KSA002009260221049, "[person] uses their [body part] to pull off their left shoe. Does [person] need to wash their hands afterward?", 002, 009
KSA002009260221050, "[person] was in a [kind of a place] when they realized that a man nearby had died from [a cause of death]. Do they need to wash once they leave?", 002, 009
KSA002009260221051, "[person1] accompanied a funerary procession. Does [person1] have to do netilat yadayim?", 002, 009
KSA002009260221052, "[person1] gives [person2] a haircut. Does [person1] need to wash their hands afterward?", 002, 009
KSA002009260221053, "[person1] takes off [something that you wear]. Do they need to wash their hands afterward?", 002, 009
KSA002009260221054, "[person1] touches their [body part]. Does [person1] have to wash their hands afterward?", 002, 009
KSA002009260221055, "[person1] was in [a room] with a dead body. Does [person1] have to do netilat yadayim?", 002, 009
KSA002009260221056, "[person2] is [doing activity] in [a place] and brushes off a [thing] louse from a [kind of thing]. Does [person2] have to do netilat yadayim afterward?", 002, 009
KSA002009260221057, "[person3] gives [person4] a haircut. Does [person4] need to wash their hands afterward?", 002, 009
KSA003001260221058, "Can [person] do [a strange action/activity]?", 003, 001
KSA003001260221059, "How does [person1] change clothing when they are alone versus when [person2] is in the [type of room] watching?", 003, 001
KSA003002260221060, "[person] lives in [country], where the non-jews in the government or in wealthy circles wear [type of fancy clothing]s to show their importance. Can [person] wear [type of fancy clothing] to make a good impression on [day of week]?", 003, 002
KSA003002260221061, "[person1] is cutting [person2]’s hair. Can [person2] ask [person1] to give them a haircut like [famous non-Jew]?", 003, 002
KSA003002260221062, "[person2] lives in [country2], where the non-jews wear [color] clothing but the Jews historically wear less ostentatious colors. Can [person2] wear [color] clothing?", 003, 002
KSA003002260221063, "[person3] lives in [country3], where the non-jews wear ornamental [type of weapon]s. Can [person3] wear ornamental [type of weapon]s to make a good impression as an honorable person?", 003, 002
KSA003003260221064, "[person1]’s [kind of clothing item] is [adjective/phrase, describing the way something could be dirty]. Can they wear the [kind of clothing item] while [doing an activity]?", 003, 003
KSA003004260221065, "[man] is tying his [kind of shoe2]s. Which [kind of shoe2] does he tie first?", 003, 004
KSA003004260221066, "[person] is putting on their [type of shoe]s. Which one does [person] put on first?", 003, 004
KSA003004260221067, "[person] is taking off their [kind of covering that goes on legs]. Which leg does the [kind of covering that goes on legs] come off of first?", 003, 004
KSA003004260221068, "[person1] is taking off their [clothing that is worn on the hands]. Which side will they take off first?", 003, 004
KSA003004260221069, "[person2] is taking off their [kind of shoe]s. Which [kind of shoe] do they take off first?", 003, 004
KSA003005260221070, "[person] has to put on [garment1]. [person] also has to put on [garment2] over [garment1]. Can [person] just put on [garment1] and [garment2] on top of it simultaneously?", 003, 005
KSA003005260221071, "Can [person2] put on their [article of clothing] and [garment1] simultaneously?", 003, 005
KSA003005260221072, "When [person] [verb: activity that involves undressing], they take off their socks. Can they put on both socks again simultaneously if they have to [verb: interesting activity]?", 003, 005
KSA003006260221073, "[man1]’s head is uncovered. Can he do [an activity of learning Torah]?", 003, 006
KSA003006260221074, "A [strange animal] grabs [man2]’s yarmulke and takes it away. Can [man2] say [a davar shebikedusha]?", 003, 006
KSA003006260221075, "Can [man] walk [number] [unit of length] in the [kind of place] with his head uncovered?", 003, 006
KSA003006260221076, "When [man] finishes [activity that involves undressing], can he wait until he [verb: interesting activity] to put on a hat?", 003, 006
KSA003006260221077, "When [man3] [does activity], does he need to wear his yarmulke?", 003, 006
KSA003007260221078, "[person] is on an errand to [verb: interesting activity]. What angle should [person] hold the head while walking?", 003, 007
KSA003008260221079, "[man1] and [man2] are walking along. Can they allow [woman1] to walk between them?", 003, 008
KSA003008260221080, "[man1] and [man2] are walking along. Can they allow a dog to walk between them?", 003, 008
KSA003008260221081, "[man1] and [man2] are walking along. Can they allow a pig to walk between them?", 003, 008
KSA003008260221082, "[man1] is walking. Can [man1] walk between two dogs?", 003, 008
KSA003008260221083, "[man2] is walking. Can [man2] walk between two pigs?", 003, 008
KSA003008260221084, "[man2] is walking. Can he walk between [woman1] and [woman2]?", 003, 008
KSA003008260221085, "[woman1] and [woman2] are walking along. Can they allow [man1] to walk between them?", 003, 008
KSA004001260221086, "How often should [a man] try to move his bowels?", 004, 001
KSA004001260221087, "If [person]’s bowels need relief but they are busy with [activity], can they wait until after [activity] to relieve themself?", 004, 001
KSA004001260221088, "If [person2]’s bladder needs relief but they are busy with [activity2], can they wait until after [activity2] to relieve themself?", 004, 001
KSA004002260221089, "[man] must urinate in [an open area]. What direction can he face?", 004, 002
KSA004002260221090, "[person] must defecate in [an open area] at [time of day]. What direction can they face?", 004, 002
KSA004002260221091, "[person1] must defecate in the middle of [an open kind of place]. Which direction can they face?", 004, 002
KSA004002260221092, "[person2] is in a [kind of building] in the [region of the world]. Which direction can they face to defecate?", 004, 002
KSA004002260221093, "[person2] must defecate on the edge of [an open area2] next to a wall. What direction can they face?", 004, 002
KSA004002260221094, "Can [person] defecate in [a public place] while a lot of Jewish people are there to [verb: interesting activity]?", 004, 002
KSA004002260221095, "Can [person] urinate in [a public place] while a lot of Jewish people are there to [verb: interesting activity2]?", 004, 002
KSA004002260221096, "Can [person2] defecate in [a public place2] while a lot of gentiles are there to [verb: interesting activity2]?", 004, 002
KSA004002260221097, "The [kind of professional] asks [person] to defecate in a [kind of container]. Can [person] do so while the [kind of professional] stands there watching?", 004, 002
KSA004004260221098, "[person2] is not sure how they should have dealt with [something important] according to halacha. Can [person2] think about this while [doing an activity] in the bathroom?", 004, 004
KSA004004260221099, "Can [person] think about [an idea from the Torah] in the bathroom?", 004, 004
KSA004005260221100, "[man] has to wipe his anus with his bare hands after defecation. Which fingers can [man] use to wipe?", 004, 005
KSA004006260221101, "[person] defecates just a tiny amount. Do they need to bless ‘asher yatzar’ afterward?", 004, 006
KSA004006260221102, "[person] went to the bathroom and forgot to bless ‘asher yatzar’. Later, they went to the bathroom again. How many times will they now say ‘asher yatzar’?", 004, 006
KSA004006260221103, "[person2] drinks a laxative and has to go to the bathroom. After they come out, they know they will probably have to go back into the bathroom very soon. Do they say ‘asher yatzar’?", 004, 006
KSA004006260221104, "[person2] urinates just a tiny drop. Do they need to bless ‘asher yatzar’ afterward?", 004, 006
KSA005002260221162, "[a large number] people urinate in an empty [something large for holding liquid]. How much water needs to be added to the [something large for holding liquid] to allow them to say [a prayer service] nearby?", 005, 002
KSA005002260221163, "[a large number] people urinated on the floor of the [kind of place where people play team sports games] during the [kind of sports] game. How much water is needed to nullify the urine so that they can say [a davar shebikedusha] after the game?", 005, 002
KSA005002260412108, "[a large number] people urinated in the [kind of room]. How much water is needed to nullify the urine so that everyone can say [a davar shebikedusha]?", 005, 002
KSA005002260221164, "[person] has a [kind of container] full of urine. If [person] pours it into a [kind of container2] filled with water, can they say [a davar shebikedusha] nearby?", 005, 002
KSA005002260221165, "[person] has two [kind of container]s: one with water and one with urine. Each [kind of container] has [number] reviot of liquid. How can [person] combine the [kind of container]s to let them talk to [person2] to review halachos?", 005, 002
KSA005002260221166, "[person] is in a [kind of place] where someone left excrement. What do they need to do to think about [a davar kedusha]?", 005, 002
KSA005002260221167, "[person1] is in a [kind of place1] where [number] people urinated. What do they need to do to think about [a davar kedusha1]?", 005, 002
KSA005002260221168, "[person1] is in a [kind of place1] where a [kind of cloth item] is moist from urine. What do they need to do to think about [a davar kedusha2]?", 005, 002
KSA005002260221169, "[person1] is in a [kind of place1] where someone urinated into a [kind of liquid container] of water. What do they need to do to think about [a davar kedusha1]?", 005, 002
KSA005002260221170, "[person2] is in a [kind of place2] where someone left [a foul-smelling substance]. What do they need to do to think about [a davar kedusha2]?", 005, 002
KSA005002260221171, "[person2] is in a [kind of place2] where someone urinated into a [kind of liquid container2] designated for urination. What do they need to do to think about [a davar kedusha2]?", 005, 002
KSA005002260221172, "[person2] urinates onto the [something very dry and absorbent]. When [person2] finishes, the surface of the [something very dry and absorbent] is no longer damp. Can [person1] say [a davar kedusha2] nearby?", 005, 002
KSA005002260221173, "[person3] is in a [kind of place2] where the ground is moist from urine. What do they need to do to think about [a davar kedusha3]?", 005, 002
KSA005002260221174, "[person3] is in a [kind of place3] where someone urinated. What do they need to do to think about [a davar kedusha3]?", 005, 002
KSA005002260221175, "[person3] urinated in [a place]. How much water does he need to pour on the urine to say [a davar kedusha3] in [a place]?", 005, 002
KSA005002260221176, "If [person1] pours a reviit of water onto the urine in a [kind of container used for putting urine], can they say [a davar kedusha1] nearby?", 005, 002
KSA005002260221177, "If [person2] covers the feces in the [part of a house] with a [kind of covering], can they say [a davar kedusha2]?", 005, 002
KSA005002260221178, "The smell of the [something that smells bad] extends through the [kind of area]. Can [person1] think about [a davar kedusha1] there?", 005, 002
KSA005002260221179, "There is a toilet containing urine in the [kind of room]. How much water does [person3] need to add to let them say [a davar shebikedusha] there?", 005, 002
KSA005003260221180, "[person] has a little excrement in the place where it comes out that is covered by their clothes. Can they say [a dvar kedusha]?", 005, 003
KSA005003260221181, "[person] has a little excrement on their [body part] that is covered by their clothes. Can they say [a dvar kedusha]?", 005, 003
KSA005004260221182, "[person] is in a clean [kind of room] and has to pray. There is a room with human waste on an upper floor. Can [person] pray?", 005, 004
KSA005004260221183, "[person1] is [doing activity] in [place1]. Do they need to check for urine or feces nearby before saying [a davar kedusha1]?", 005, 004
KSA005005260221184, "[person] is [number] months old and produces excrement. Is their excrement a problem for [person2] to say [a davar shebikedusha]?", 005, 005
KSA005005260221185, "[person] is [number] months old and produces urine. Is their urine a problem for [person2] to say [a davar shebikedusha]?", 005, 005
KSA005006260221186, "[person] finds a pile of weasel feces while [doing activity] in the [kind of place]. Can [person] say [a davar kedusha2] nearby without cleaning up the weasel feces?", 005, 006
KSA005006260221187, "[person] is by a pool of water used to soak cannabis. Can [person] say [a davar shebikedusha]?", 005, 006
KSA005006260221188, "[person1] is by a pool of water used to soak flax. Can [person1] say [a davar shebikedusha1]?", 005, 006
KSA005006260221189, "[person1] is in a place with a smelly, rotting [type of food]. Can [person] say [a davar shebikedusha1]?", 005, 006
KSA005006260221190, "[person1] is in a place with human excrement that doesn’t smell bad. Can [person1] say [a davar shebikedusha1]?", 005, 006
KSA005006260221191, "[person1] is in a place with turkey excrement that doesn’t smell bad. Can [person1] say [a davar shebikedusha1]?", 005, 006
KSA005006260221192, "[person2] finds an open [container] of [type of mammal] droppings under a [kind of furniture] in shul. Can [person2] daven nearby if the [type of mammal] droppings don’t smell?", 005, 006
KSA005006260221193, "[person2] is by a [type of body of water] and there is a bad smell. Can [person2] say [a davar shebikedusha2]?", 005, 006
KSA005006260221194, "[person2] is in a place with [animal commonly kept as a pet] excrement that doesn’t smell bad. Can [person2] say [a davar shebikedusha2]?", 005, 006
KSA005006260221195, "[person2] is in a place with a smelly [type of animal] carcass. Can [person2] say [a davar shebikedusha2]?", 005, 006
KSA005006260221196, "[person2] is in a place with cat excrement that doesn’t smell bad. Can [person2] say [a davar shebikedusha2]?", 005, 006
KSA005006260221197, "[person3] is in a chicken coop. Can [person3] say [a davar shebikedusha3]?", 005, 006
KSA005006260221198, "[person3] is in a place with [type of bird] excrement. Can [person3] say [a davar shebikedusha3]?", 005, 006
KSA005007260221199, "[person] is in a room with a lot of excrement, and this excrement is frozen and very brittle and thus doesn’t smell. Can [person] say [a davar shebikedusha2]?", 005, 007
KSA005007260221200, "[person] is in a room with a lot of excrement, and this excrement is very dry and crumbly and doesn’t smell. Can [person] say [a davar shebikedusha]?", 005, 007
KSA005007260221201, "[person2] is in a [kind of place] with excrement that is covered by snow. Can [person2] say [a davar shebikedusha]?", 005, 007
KSA005007260221202, "[person2] is in a room with a lot of excrement, and this excrement is very dry and crumbly and smells bad. Can [person2] say [a davar shebikedusha2]?", 005, 007
KSA005008260221203, "There is excrement behind [person] and it doesn’t smell even up close. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 005, 008
KSA005008260221204, "There is excrement behind [person], who doesn’t have a sense of smell. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 005, 008
KSA005008260221205, "There is excrement in front of [person]. At night, how far away from the excrement does [person] need to go to say [a davar kedusha]?", 005, 008
KSA005008260221206, "There is excrement in front of [person]. During the day, how far away from the excrement does [person] need to go to say [a davar kedusha]?", 005, 008
KSA005008260221207, "There is excrement off to the side of [person]. How can [person] say [a davar kedusha] without going very far away?", 005, 008
KSA005008260323152, "There is excrement off to the side of [person]. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 005, 008
KSA005008260221209, "There is smelly excrement behind [person]. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 005, 008
KSA005009260221210, "[person] is serving as a shaliach tzibur for a group of Jews’ tefilah in a [kind of room]. If excrement is found in the same [kind of room] but it is behind the shaliach tzibur and the smell doesn’t extend within four amot of the shaliach tzibur, then can they go ahead and daven?", 005, 009
KSA005010260221105, "[person1] was in [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, davened the 18 blessings, and afterward found excrement. Does [person1] need to repeat the 18 blessings?", 005, 010
KSA005010260221106, "[person1] was in [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said birkat hamazon, and afterward found excrement. Does [person1] repeat birkat hamazon?", 005, 010
KSA005010260221107, "[person1] was in [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said the Shema with its berachos, and afterward found excrement. Does [person1] repeat the berachos of the Shema?", 005, 010
KSA005010260221108, "[person1] was in [a place suitable to suspect that there was urine there], did not check whether there was urine present, davened the 18 blessings, and afterward found urine. Does [person1] need to repeat the 18 blessings?", 005, 010
KSA005010260221109, "[person1] was in [a place suitable to suspect that there was urine there], did not check whether there was urine present, said birkat hamazon, and afterward found urine. Does [person1] repeat birkat hamazon?", 005, 010
KSA005010260221110, "[person1] was in [a place suitable to suspect that there was urine there], did not check whether there was urine present, said the Shema, and afterward found urine. Does [person1] repeat the Shema?", 005, 010
KSA005010260221111, "[person1] was in a [kind of place], did not check whether there was excrement present, davened the 18 blessings, and afterward found excrement. Does [person1] need to repeat the 18 blessings?", 005, 010
KSA005010260221112, "[person1] was in a [kind of place], did not check whether there was excrement present, said birkat hamazon, and afterward found excrement. Does [person1] repeat birkat hamazon?", 005, 010
KSA005010260221113, "[person1] was in a [kind of place], did not check whether there was excrement present, said the Shema with its berachos, and afterward found excrement. Does [person1] repeat the berachos of the Shema?", 005, 010
KSA005010260221114, "[person2] was in a [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said [a beracha], and afterward found excrement. Does [person2] repeat [a beracha]?", 005, 010
KSA005010260221115, "[person2] was in a [a place suitable to suspect that there was excrement there2], did not check whether there was excrement present, said the Shema, and afterward found excrement. Does [person2] repeat the Shema?", 005, 010
KSA005010260221116, "[person2] was in a [a place suitable to suspect that there was urine there], did not check whether there was urine present, said the Shema with its berachos, and afterward found urine. Does [person2] repeat the berachos of the Shema?", 005, 010
KSA005010260221117, "[person2] was in a [kind of place2], did not check whether there was excrement present, said the Shema, and afterward found excrement. Does [person2] repeat the Shema?", 005, 010
KSA005011260221118, "A smell left [person1] from below. Can [person1] learn [an area of torah learning]?", 005, 011
KSA005011260221119, "A smell left [person1] from below. Can [person1] say [a davar shebikedusha]?", 005, 011
KSA005011260221120, "A smell left [person1] from below. Can [person2] say [a davar shebikedusha] nearby?", 005, 011
KSA005011260221121, "A smell left [person1] from below. Can [person2] study [an area of torah learning] nearby?", 005, 011
KSA005012260221122, "[person] wants to say [a davar kedusha] and is right next to a [kind of bathroom] where [person2] is doing their thing. What does [person] need to do?", 005, 012
KSA005012260221123, "[person] wants to say [a davar kedusha] and is right next to an empty [kind of bathroom] that is free of excrement. What does [person] need to do?", 005, 012
KSA005012260221124, "[person1] has a favorite [kind of chair] that they like to sit on while they do their [activity done sitting]. If you lift up a special cushion, this [kind of chair] has a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person1] is sitting on the chair and releases excrement into the hole. Then [person1] finishes, takes the [kind of container] out of the room, covers the hole in the [kind of chair] with the cushion, and sits back down. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 005, 012
KSA005012260221125, "[person4] has a favorite chair that they like to sit on while they do their [activity done sitting3]. This is a [kind of chair2] with a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person4] is sitting on the chair and releases excrement into the hole. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 005, 012
KSA005012260221126, "[person3] has a favorite [kind of chair2] that they like to sit on while they do their [activity done sitting2]. If you lift up a special cushion, this [kind of chair2] has a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person3] is sitting on the chair and releases excrement into the hole. Then [person3] finishes, covers the hole in the [kind of chair2] with the cushion, and sits back down. [person2] is nearby and wants to say [a davar kedusha2]. What should [person2] do?", 005, 012
KSA005012260221127, "There is a special toilet, which is a [kind of chair3] with a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person1] is sitting on the chair and releases excrement into the hole into the [kind of container]. [person1] finishes, takes out the [kind of container], covers the hole in the [kind of chair3], and leaves. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 005, 012
KSA005012260221128, "There is a special toilet, which is a [kind of chair2] with a hole in the middle. A [kind of container2] fits into a slot beneath the hole. [person3] is sitting on the chair and releases excrement into the hole into the [kind of container2]. [person3] finishes, takes out the [kind of container2], and leaves. [person2] is nearby and wants to say [a davar kedusha2]. What should [person2] do?", 005, 012
KSA005013260221129, "[person1] has a [type of container] made of [glass or a type of metal] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t smell bad. Can [person1] say [a davar kedusha] near this [type of container]?", 005, 013
KSA005013260221130, "[person1] has a [type of container] made of [glass or a type of metal] and designated for putting [excrement or urine]. The [type of container] is clean but still a little bit smelly. Can [person1] say [a davar kedusha2] near this [type of container]?", 005, 013
KSA005013260221131, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. Is this considered halachically the same as an outhouse?", 005, 013
KSA005013260221132, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t have a bad smell. The [type of container] is full of clean water. Is this [type of container] considered something that needs to be avoided to say [a davar kedusha]?", 005, 013
KSA005013260221133, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t have a bad smell. The [type of container] is turned upside down. Is this [type of container] considered something that needs to be avoided to say [a davar kedusha]?", 005, 013
KSA005013260221134, "[person1] has a [type of container3] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container3] is in a room with [person1]. What does [person1] need to do with the [type of container3] to say [a davar kedusha2]?", 005, 013
KSA005013260221135, "[person1] owns a pig named [name for a farm animal]. [name for a farm animal] has been diving in the water of the river and is now sticking their head out of the water. They are very clean. How does the halachic status of [name for a farm animal]’s mouth compare to the halachic status of a [type of container] used to put excrement?", 005, 013
KSA005013260221136, "[person1] owns a pig named [name for a farm animal]. Can [person2] say [a davar shebikedusha3] while in a [kind of place] with [name for a farm animal]?", 005, 013
KSA005013260221137, "[person2] has a [type of container] made of [glass or a type of metal] and designated for putting [excrement or urine]. The [type of container] is a bit dirty. Can [person2] say [a davar kedusha] near this [type of container]?", 005, 013
KSA005013260221138, "[person2] has a [type of container2] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container2] is clean and doesn’t have a bad smell. Is this [type of container2] considered halachically the same as an outhouse?", 005, 013
KSA005013260221139, "[person2] is hired to help wash a pig named [name for a farm animal]. When the pig is clean, can [person2] sing [a Jewish song]?", 005, 013
KSA005014260221140, "Can [person] say [a common Jewish greeting] to [person1] in a dirty [kind of place]?", 005, 014
KSA005014260221141, "Can [person] think about [a davar kedusha] in a room where people bathe?", 005, 014
KSA005015260221142, "Can [person] say [a davar shebikedusha] while wearing a [a kind of garment] and nothing else?", 005, 015
KSA005015260221143, "Can [person] say [a davar shebikedusha] while young [person1] is bathing nearby?", 005, 015
KSA005015260221144, "Can [person1] say [a davar shebikedusha1] while facing [a kind of erva] if [person1] closes their eyes?", 005, 015
KSA005015260221145, "Does [man] have to look away from baby [man2] while making the berachas of milah?", 005, 015
KSA005015260221146, "Can [person] say [a davar Torah] in front of [person2], who is wearing a [kind of garment] and nothing else?", 005, 015
KSA005016260221147, "[man] cannot say [a davar shebikedusha] in front of [woman] because [woman]’s [body part normally covered] is exposed. Does [woman]’s husband [man2] also have to wait to cover this to say [a davar shebikedusha]?", 005, 016
KSA005016260221148, "[man] hears [woman1] singing. [man] is learning [a davar Torah]. If he cannot make [woman1] stop singing and cannot go anywhere else, is he allowed to learn [a davar Torah] where he can hear [woman1] singing?", 005, 016
KSA005016260221149, "[man1] hears [woman] singing. [man1] has to say Shema. If he cannot make [woman] stop singing and cannot go anywhere else, is he allowed to say Shema where he can hear [woman] singing?", 005, 016
KSA005016260221150, "[man1] hears [woman1] singing. [man1] has to say tefillah. If he cannot make [woman1] stop singing and cannot go anywhere else, is he allowed to say tefillah where he can hear [woman1] singing?", 005, 016
KSA005016260221151, "[woman]’s [article of clothing] has a hole of diameter [number] inches. Is this considered erva to [man]?", 005, 016
KSA005016260221152, "[woman1] is married and usually covers her entire hair with a [head covering]. Can [woman2] talk about [a davar shebikedusha] with [woman1] while [woman1]’s hair is totally exposed?", 005, 016
KSA005016260221153, "A tefach is revealed of Mrs. [last name]'s [a body part that women normally cover]. Is this considered erva to Mr. [last name]?", 005, 016
KSA005016260221154, "A tefach is revealed of Mrs. [last name2]'s [a body part that women normally cover]. Is this considered erva to Mr. [last name]?", 005, 016
KSA005017260221155, "[man] is wearing a [type of garment that covers the whole body]. Can [man] say [a davar shebikedusha]?", 005, 017
KSA005017260221156, "[man] is wearing a belt around his waistline underneath [a kind of garment that covers the whole body]. Can [man] say [a davar shebikedusha3]?", 005, 017
KSA005017260221157, "[man1] is wearing a robe and presses his robe against his body all the way around his waistline using his arms. Can [man1] say [a davar shebikedusha]?", 005, 017
KSA005017260221158, "[man2] is wearing a belt around his waistline on top of a [a kind of garment that covers the whole body2]. Can [man2] say [a davar shebikedusha]?", 005, 017
KSA005017260221159, "Can [man] say [a davar shebikedusha] if he is naked in bed?", 005, 017
KSA005017260221160, "Can [man1] say [a davar shebikedusha3] if he is only wearing a robe without a belt?", 005, 017
KSA005017260221161, "Can [woman] say [a davar shebikedusha2] if she is only wearing a robe without a belt?", 005, 017
KSA006001260221211, "After eating [a meal], what kind of plan does [person] need to make before they start to make the beracha?", 006, 001
KSA006001260221212, "Can [person] bless [a beracha that a person says to hashem] while doing [action that a person has to take in daily life]?", 006, 001
KSA006001260221213, "Can [person] say [a beracha after eating food] while doing [an activity done to clean off after a meal]?", 006, 001
KSA006001260221214, "How loudly does [person2] generally say the beracha [a beracha]?", 006, 001
KSA006001260221215, "If [person1] is saying [a series of berachas] by rote and doesn’t know exactly what beracha they are up to after saying “baruch atah,” should they just keep going?", 006, 001
KSA006001260221216, "When [person2] blesses [a beracha that a person says to hashem2] in daily life, how loud do they generally speak?", 006, 001
KSA006002260221217, "[person] has [something that goes in a person's mouth] in their mouth. Can [person] say [a beracha]?", 006, 002
KSA006002260221218, "[person] has saliva in their mouth. Can [person] say [a beracha]?", 006, 002
KSA006003260221219, "[person] is with their friend [person2] and making jokes. Can [person] make a beracha on [a kind of beverage] while in a completely silly mood?", 006, 003
KSA006003260221220, "Can [person] say that [person1] shouldn’t be blessed with [a good thing that a person wants in their life]?", 006, 003
KSA006003260221221, "Can [person1] refer to and say [a name of Hashem] over and over for fun?", 006, 003
KSA006003260221222, "Can [person2] write the word [a word for Hashem in any language]?", 006, 003
KSA006004260223223, "[person] starts saying a [name of a beracha rishonah on food] on some [type of food] when they realize that they already made the right beracha. If they realize after saying "baruch atah hashem," what will they do?", 006, 004
KSA006004260223224, "[person1] starts blessing [the name of a beracha] when they realize that they're not required to say this beracha. If they realize after saying "baruch atah hashem elokei," what will they do?", 006, 004
KSA006004260223225, "[person] started to say the beracha of [the name of a beracha1] while [doing activity] but caught themselves and said "lamdeni chukecha" to make it a pasuk. What else do they need to say?", 006, 004
KSA006004260223226, "[person] started to say the beracha of [the name of a beracha] while [doing activity] but caught themselves and said "yisrael avinu meolam vead olam" to make it a pasuk. What else do they need to say?", 006, 004
KSA006005260223227, "In [person]'s community, the custom is to pour out all water in the vicinity of a dead body. [person] made a beracha on a glass of water and then, before they started drinking, heard that a dead body was nearby. What will they do?", 006, 005
KSA006007260317271, "How many berachos is [man1] obligated to say on [name of a day]?", 006, 007
KSA006008260223228, "When [person] is blessing [the name of a beracha] and [person2] hears them say "Baruch atah Hashem," what does [person2] say?", 006, 008
KSA006008260223229, "When [person] blesses [the name of a series of berachas like birkat hamazon or birchot hashachar], what does [person2] say as soon as [person] says each beracha?", 006, 008
KSA006009260223230, "If [person] is saying [the name of a beracha] for themselves and for [person2], will [person2] say "baruch hu uvaruch shemo"?", 006, 009
KSA006010260223231, "[person] listens to [person1] saying [the name of a beracha]. How long does [person] need to wait to start saying amen?", 006, 010
KSA006010260223232, "[person] blesses [the name of a beracha] very quietly. How quietly does [person2] say amen?", 006, 010
KSA006011260223233, "[person] says [the name of a beracha]. When they finish, do they answer amen?", 006, 011
KSA006011260223234, "[person] and [person1] both finish saying [the name of a beracha] simultaneously. Can they answer amen to one another's berachos?", 006, 011
KSA006011260223235, "[person] finishes saying [the name of a beracha1] at the same moment that [person1] finishes saying [the name of a beracha]. Can they answer amen to one another's berachos?", 006, 011
KSA006011260223236, "[person] and [person1] both finish saying the beracha of yishtabach simultaneously. Can they answer amen to one another's berachos?", 006, 011
KSA007001260223237, "[person] is saying birchot haTorah while standing near [person1]. Can [person] say the entire set of berachas loudly?", 007, 001
KSA007002260223238, "If [person2] wakes up at [time in the early morning], can they say all of birchos hashachar?", 007, 002
KSA007003260221223, "[person] is blind. Will [person] still say the beracha "pokeach ivrim"?", 007, 003
KSA007003260221224, "After making the beracha "matir asurim," [person] realizes they have not yet blessed "zokef kefufim." Can they make that beracha?", 007, 003
KSA007003260221225, "After making the beracha "zokef kefufim," [person] realizes they have not yet blessed "matir asurim." Can they make that beracha?", 007, 003
KSA007003260221226, "After making the beracha "[one of birchos hashachar]," [person] realizes they have not yet blessed "matir asurim." Can they make that beracha?", 007, 003
KSA007004260221227, "After [person] says "hamaavir shenah meeinai utenumah meafapai," does [person2] answer "amen"?", 007, 004
KSA007005260221228, "[person] stays up all night [doing activity]. Can they make the beracha "al netilat yadayim" in the morning before shacharit?", 007, 005
KSA007005260221229, "[person2] stays up all night [doing activity2]. Can they make all the berachas of birchos hashachar on their own in the morning?", 007, 005
KSA007006260221230, "[person] doesn't bless "al netilat yadayim" before shacharit. Will they bless "al netilat yadayim" after shacharit?", 007, 006
KSA007007260221231, "[person] is running late. Can they skip birchot haTorah until after shacharit?", 007, 007
KSA007007260221232, "[man1] forgot to say birchot haTorah. What does he need to do right after shemoneh esreh of shacharit?", 007, 007
KSA007007260221233, "[man] realizes after shacharit that he forgot to say birchot haTorah. Will he say them now?", 007, 007
KSA007008260221234, "[man2] arrives at shul and is called up for an aliya before he's said birchot haTorah. After the aliyah, how will he make birchot haTorah?", 007, 008
KSA008001260221235, "After [man] wakes up at [a time in the morning], can he start working on [a chore or assignment that a person has to do]?", 008, 001
KSA000001260221236, "Can [man1] leave to start travelling to [a faraway place] at [a time in the morning]?", 008, 001
KSA008002260221237, "Can [man] eat [a kind of food] at [a time in the morning] before saying shacharit?", 008, 002
KSA008002260221238, "Can [man] have [coffee or tea] with [sugar or milk] at [time in the morning] before saying shacharit?", 008, 002
KSA008002260221239, "[man1] does not feel well and cannot wait until after saying shacharit at shul to have [coffee or tea] with [sugar or milk]. Can he have some before he goes to shul and davens?", 008, 002
KSA008002260221240, "[man1] does not feel well and cannot wait until after saying shacharit at shul to eat [a kind of food]. Can he have some before he goes to shul and davens?", 008, 002
KSA008003260221241, "[man] wakes up at [a time in the early morning before dawn]. Can he have some [kind of food]?", 008, 003
KSA008004260221242, "May [man] drink [water, coffee, or tea] at [a time in the morning] before shacharit?", 008, 004
KSA008004260221243, "May [man] drink [water, coffee, or tea] on Shabbos morning before shacharit?", 008, 004
KSA008005260221244, "When [man] runs into [person] in the morning on his way to shacharit, can he greet them?", 008, 005
KSA008005260221245, "When [man] sees [person2] in the morning on his way to shacharit, can he approach them to greet them?", 008, 005
KSA008006260221246, "[man1] wakes up at [time in the morning]. Can he learn [an area of Torah] and then daven shacharit on his own?", 008, 006
KSA008006260221247, "[man1] wakes up at [time in the morning]. Can he study [an area of Torah] before heading to his normal minyan at shul?", 008, 006
KSA008006260221248, "If the only shiur on [an area of Torah] is at [time in the morning], can [man] go straight to the shiur after waking up and then daven shacharit on his own afterward?", 008, 006
KSA009001260221249, "Does [man] wear a tallit katan at [a time of day]?", 009, 001
KSA009001260221250, "Can [man] make a talit katan from [color]-dyed [kind of clothing material]?", 009, 001
KSA009001260221251, "Can [man] make a tallit katan that is [a fraction] square amot in area?", 009, 001
KSA009001260221252, "Can [man] sew together the sides of a talit katan to make it easier to wear?", 009, 001
KSA009001260221253, "[man] is [someone's age in years] years old. Does he need a talit gadol?", 009, 001
KSA005002260412273, "[person] urinated in a [kind of container meant for holding urine/feces] and left it in the [kind of room]. How much water does [person2] need to add to it to nullify it so that [person2] can say [a davar torah]?", 005, 002
KSA005003260412274, "[person1] accidentally gets feces smeared on the skin of their [body part]. What can [person1] do to say [a beracha] before they get home and shower?", 005, 003
KSA005005260412275, "[person4] urinated on the floor of the [kind of building]. They are [number from 1 to 20] months old. Can [person1] keep learning nearby?", 005, 005
KSA005005260412276, "[person1] is [number from 1 to 100] weeks old. After [person1] defecates in [person2]'s [kind of room], can [person2] keep davening there?", 005, 005
KSA005006260412277, "[person2] is learning [an area of Torah] while their friend [person3] chases turkeys. When one of the turkeys defecates, can they keep learning?", 005, 006`;





















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































