// This constant holds the raw data for the study tool
const rawCsvData = `ID,Question,Chapter,Paragraph
260217233400, "[person] is [doing activity]. Can HKBH see them?", 1, 1
260217233401, "[person2] wakes up. What do they notice promptly?", 1, 2
260217233402, "Should [person2] say modeh ani after waking before they wash their hands?", 1, 2
260217233403, "What should [person] say immediately after waking up in the morning?", 1, 2
260217233404, "[public figure] mocks [person] for keeping the mitzvah of [mitzvah]. How should [person] feel in response?", 1, 3
260217233405, "From most to least valuable for [person1], rank staying in bed when they’re tired, getting [number] thousand dollars, or getting up to learn Torah or daven.", 1, 4
260217233406, "Is it more important for [person] to [do something for avodas Hashem], or to [do something that results in material gain or avoids material loss]?", 1, 4
260217233407, "It’s time for [person] to get up but it’s cold. Do they need to get up immediately?", 1, 4
260217233408, "It’s time for [person2] to get up but they aren’t sure if they slept enough yet. Do they get up anyway?", 1, 4
260217233409, "[man] is awake at [time of night] studying [a part of Torah]. What does he have to do to become a worker for Hashem?", 1, 5
260217233410, "When can [person] say tikun chatzot?", 1, 5
260217233411, "When is the best time for [man2] to get up in the morning?", 1, 5
260217233412, "Can [person] say [part of tanach] from memory?", 1, 6
260217233413, "If [person3] is blind, can they say [part of tanach] from memory?", 1, 6
260217233414, "[person] is saying Maamados and gets to the end where it finishes ברוך אתה ה' שומע תפלה. What ending beracha should [person] say?", 1, 7
260217233415, "[person2] wakes up with tumah energy on their fingers. How do they remove the energy?", 2, 1
260217233416, "After [person] wakes up in the morning, can [person] travel to [place] before washing their hands?", 2, 1
260217233417, "Can [man2] go from [place1] to [place2] without wearing tzitzit?", 2, 2
260217233418, "Does [man] wear tzitzit while [doing activity] in [a place]?", 2, 2
260217233419, "[person] doesn't have enough water to wash their whole hands when they get up in the morning. How much of their hands do they need to wash?", 2, 3
260217233420, "Does [person3] rinse their mouth in the morning?", 2, 3
260217233421, "Does [person3] wash their face in the morning?", 2, 3
260217233422, "How many times does [person] pour water on each hand after waking up?", 2, 3
260217233423, "When [person] washes their hands in the morning, which hand does [person] use to pick up the washing cup first?", 2, 3
260217233424, "Which hand does [person] wash first in the morning?", 2, 3
260217233425, "[person2] needs to make [pasta dish]. Can [person2] use the water from washing their hands when they wake up?", 2, 4
260217233426, "After [person] washes their hands upon waking, can they use the water from their hand-washing for [task that requires water]?", 2, 4
260217233427, "Before [person] washes their hands in the morning, can they touch their [a body opening]?", 2, 5
260217233428, "Before [person] washes their hands in the morning, can they touch their [food item]?", 2, 5
260217233429, "[person] is in [a place without access to water]. What should they do to prepare their hands for shacharit?", 2, 6
260217233430, "[person1], before tefillah, wipes his hands on [something]. Does he wash his hands with water when [person2] comes with [a container] of water a bit later?", 2, 6
260217233431, "[person2] washes their hands for shacharit by pouring [adjective] water on them out of [a kind of thing that can hold liquid]. Can they make a beracha?", 2, 6
260217233432, "[person2] washes their hands with soap and water before shacharit. Do they make a beracha?", 2, 6
260217233433, "If [person1] doesn’t have access to any water, how should they wash their hands before tefillah?", 2, 6
260217233434, "If [person1] washes before shacharis with water from [a source of flowing water]. What bracha should they make?", 2, 6
260217233435, "If [person1] washes their hands before tefillah with [a source of flowing water], do they still need to wash their hands later?", 2, 6
260217233436, "If [person1] wipes their hands before tefillah on a [thing] instead of washing them with water in the morning, what bracha should they make?", 2, 6
260217233437, "When [person] gets to shacharit, there isn’t a washing cup. How will [person] prepare their hands for tefilah?", 2, 6
260217233438, "[Person] needs to urinate. Can they say [a beracha] first?", 2, 7
260217233439, "[person1] is hungry and needs to urinate. Can they say a beracha and eat and then urinate?", 2, 7
260217233440, "[Person2] needs to defecate. Can they say [a beracha2] first?", 2, 7
260217233441, "[person] sleeps for [number] minutes during the day. Should they wash their hands when they wake up like they normally do in the morning?", 2, 8
260217233442, "[person] stays awake all night. Should they wash their hands normally in the morning?", 2, 8
260217233443, "[person] woke up and washed their hands properly while it was still night. Do they need to wash their hands again after dawn?", 2, 8
260217233444, "[person] leaves a cemetary. Do they need to wash their hands afterward?", 2, 9
260217233445, "[person] touches their [a body part]. Do they need to wash their hands afterward?", 2, 9
260217233446, "[person] trims the nail of their left pointer finger. Do they need to wash their hands afterward?", 2, 9
260217233447, "[person] uses their [body part] to pull of their left shoe. Does [person] need to wash their hands afterward?", 2, 9
260217233448, "[person] was in a [kind of a place] when they realized that a man nearby had died from [a cause of death]. Do they need to wash once they leave?", 2, 9
260217233449, "[person1] accompanied a funerary procession. Does [person1] have to do netilat yadayim?", 2, 9
260217233450, "[person1] gives [person2] a haircut. Does [person1] need to wash their hands afterward?", 2, 9
260217233451, "[person1] takes off [something that you wear]. Do they need to wash their hands afterward?", 2, 9
260217233452, "[person1] touches their [body part]. Does [person1] have to wash their hands afterward?", 2, 9
260217233453, "[person1] was in [a room] with a dead body. Does [person1] have to do netilat yadayim?", 2, 9
260217233454, "[person2] is [doing activity] in [a place] and brushes off a [thing] louse from a [kind of thing]. Does [person] have to do netilat yadayim afterward?", 2, 9
260217233455, "[person3] gives [person4] a haircut. Does [person4] need to wash their hands afterward?", 2, 9
260217233456, "Can [person] do [a strange action/activity]?", 3, 1
260217233457, "How does [person1] change clothing when they are alone versus when [person2] is in the [type of room] watching?", 3, 1
260217233458, "[person] lives in [country], where the non-jews in the government or in wealthy circles wear [type of fancy clothing]s to show their importance. Can [person] wear [type of fancy clothing] to make a good impression on [day of week]?", 3, 2
260217233459, "[person1] is cutting [person2]’s hair. Can [person2] ask [person1] to give them a haircut like [famous non-Jew]?", 3, 2
260217233460, "[person2] lives in [country2], where the non-jews wear [color] clothing but the Jews historically wear less ostentatious colors. Can [person2] wear [color] clothing?", 3, 2
260217233461, "[person3] lives in [country3], where the non-jews wear ornamental [type of weapon]s. Can [person3] wear ornamental [type of weapon]s to make a good impression as an honorable person?", 3, 2
260217233462, "[person1]’s [kind of clothing item] is [adjective/phrase, describing the way something could be dirty]. Can they wear the [kind of clothing item] while [doing an activity]?", 3, 3
260217233463, "[man] is tying his [kind of shoe2]s. Which [kind of shoe2] does he tie first?", 3, 4
260217233464, "[person] is putting on their [type of shoe]s. Which one does [person] put on first?", 3, 4
260217233465, "[person] is taking off their [kind of covering that goes on legs]. Which leg does the [kind of covering that goes on legs] come off of first?", 3, 4
260217233466, "[person1] is taking off their [clothing that is worn on the hands]. Which side will they take off first?", 3, 4
260217233467, "[person2] is taking off their [kind of shoe]s. Which [kind of shoe] do they take off first?", 3, 4
260217233468, "[person] has to put on [garment1]. [person] also has to put on [garment2] over [garment1]. Can [person] just put on [garment1] and [garment2] on top of it simultaneously?", 3, 5
260217233469, "Can [person2] put on their [article of clothing] and [garment1] simultaneously?", 3, 5
260217233470, "When [person] [verb: activity that involves undressing], they take off their socks. Can they put on both socks again simultaneously if they have to [verb: interesting activity]?", 3, 5
260217233471, "[man1]’s head is uncovered. Can he do [an activity of learning Torah].", 3, 6
260217233472, "A [strange animal] grabs [man2]’s yarmulke and takes it away. Can [man2] say [a davar shebikedusha]?", 3, 6
260217233473, "Can [man] walk [number] of [unit of length] in the [kind of place] with his head uncovered?", 3, 6
260217233474, "When [man] finishes [activity that involves undressing], can he wait until he [verb: interesting activity] to put on a hat?", 3, 6
260217233475, "When [man3] [does activity], does he need to wear his yarmulke?", 3, 6
260217233476, "[person] is on an errand to [verb: interesting activity]. What angle should [person] hold the head while walking?", 3, 7
260217233477, "[man1] and [man2] are walking along. Can they allow [woman1] to walk between them?", 3, 8
260217233478, "[man1] and [man2] are walking along. Can they allow a dog to walk between them?", 3, 8
260217233479, "[man1] and [man2] are walking along. Can they allow a pig to walk between them?", 3, 8
260217233480, "[man1] is walking. Can [man1] walk between two dogs?", 3, 8
260217233481, "[man2] is walking. Can [man2] walk between two pigs?", 3, 8
260217233482, "[man2] is walking. Can he walk between [woman1] and [woman2]?", 3, 8
260217233483, "[woman1] and [woman2] are walking along. Can they allow [man1] to walk between them?", 3, 8
260217233484, "How often should [a man] try to move his bowels?", 4, 1
260217233485, "If [person]’s bowels need relief but they are busy with [activity], can they wait until after [activity] to relieve themself?", 4, 1
260217233486, "If [person2]’s bladder needs relief but they are busy with [activity2], can they wait until after [activity2] to relieve themself?", 4, 1
260217233487, "[man] must urinate in [an open area]. What direction can he face?", 4, 2
260217233488, "[person] must defecate in [an open area] at [time of day]. What direction can they face?", 4, 2
260217233489, "[person1] must defecate in the middle of [an open kind of place]. Which direction can they face?", 4, 2
260217233490, "[person2] is in a [kind of building] in the [region of the world]. Which direction can they face to defecate?", 4, 2
260217233491, "[person2] must defecate on the edge of [an open area2] next to a wall. What direction can they face?", 4, 2
260217233492, "Can [person] defecate in [a public place] while a lot of Jewish people are there to [verb: interesting activity]?", 4, 2
260217233493, "Can [person] urinate in [a public place] while a lot of Jewish people are there to [verb: interesting activity2]?", 4, 2
260217233494, "Can [person2] defecate in [a public place2] while a lot of gentiles are there to [verb: interesting activity2]?", 4, 2
260217233495, "The [kind of professional] asks [person] to defecate in a [kind of container]. Can [person] do so while the [kind of professional] stands there watching?", 4, 2
260217233496, "[person2] is not sure how they should have dealt with [something important] according to halacha. Can [person2] think about this while [doing an activity[ in the bathroom?", 4, 4
260217233497, "Can [person] think about [an idea from the Torah] in the bathroom?", 4, 4
260217233498, "[man] has to wipe his anus with his bare hands after defecation. Which fingers can [man] use to wipe?", 4, 5
260217233499, "[person] defecates just a tiny amount. Do they need to bless ‘asher yatzar’ afterward?", 4, 6
260217233500, "[person] went to the bathroom and forgot to bless ‘asher yatzar’. Later, they went to the bathroom again. How many times will they now say ‘asher yatzar’?", 4, 6
260217233501, "[person2] drinks a laxative and has to go to the bathroom. After they come out, they know they will probably have to go back into the bathroom very soon. Do they say ‘asher yatzar’?", 4, 6
260217233502, "[person2] urinates just a tiny drop. Do they need to bless ‘asher yatzar’ afterward?", 4, 6
260217233503, "[person1] was in a [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, davened the 18 blessings, and afterward found excrement. Does [person1] need to repeat the 18 blessings?", 5, 10
260217233504, "[person1] was in a [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said birkat hamazon, and afterward found excrement. Does [person1] repeat birkat hamazon?", 5, 10
260217233505, "[person1] was in a [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said the Shema with its berachos, and afterward found excrement. Does [person1] repeat the berachos of the Shema?", 5, 10
260217233506, "[person1] was in a [a place suitable to suspect that there was urine there], did not check whether there was urine present, davened the 18 blessings, and afterward found urine. Does [person1] need to repeat the 18 blessings?", 5, 10
260217233507, "[person1] was in a [a place suitable to suspect that there was urine there], did not check whether there was urine present, said birkat hamazon, and afterward found urine. Does [person1] repeat birkat hamazon?", 5, 10
260217233508, "[person1] was in a [a place suitable to suspect that there was urine there], did not check whether there was urine present, said the Shema, and afterward found urine. Does [person1] repeat the Shema?", 5, 10
260217233509, "[person1] was in a [kind of place], did not check whether there was excrement present, davened the 18 blessings, and afterward found excrement. Does [person1] need to repeat the 18 blessings?", 5, 10
260217233510, "[person1] was in a [kind of place], did not check whether there was excrement present, said birkat hamazon, and afterward found excrement. Does [person1] repeat birkat hamazon?", 5, 10
260217233511, "[person1] was in a [kind of place], did not check whether there was excrement present, said the Shema with its berachos, and afterward found excrement. Does [person1] repeat the berachos of the Shema?", 5, 10
260217233512, "[person2] was in a [a place suitable to suspect that there was excrement there], did not check whether there was excrement present, said [a beracha], and afterward found excrement. Does [person2] repeat [a beracha]?", 5, 10
260217233513, "[person2] was in a [a place suitable to suspect that there was excrement there2], did not check whether there was excrement present, said the Shema, and afterward found excrement. Does [person2] repeat the Shema?", 5, 10
260217233514, "[person2] was in a [a place suitable to suspect that there was urine there], did not check whether there was urine present, said the Shema with its berachos, and afterward found urine. Does [person2] repeat the berachos of the Shema?", 5, 10
260217233515, "[person2] was in a [kind of place2], did not check whether there was excrement present, said the Shema, and afterward found excrement. Does [person2] repeat the Shema?", 5, 10
260217233516, "A smell left [person1] from below. Can [person1] learn [an area of torah learning]?", 5, 11
260217233517, "A smell left [person1] from below. Can [person1] say [a davar shebikedusha]?", 5, 11
260217233518, "A smell left [person1] from below. Can [person2] say [a davar shebikedusha] nearby?", 5, 11
260217233519, "A smell left [person1] from below. Can [person2] study [an area of torah learning] nearby?", 5, 11
260217233520, "[person] wants to say [a davar kedusha] and is right next to a [kind of bathroom] where [person2] is doing their thing. What does [person] need to do?", 5, 12
260217233521, "[person] wants to say [a davar kedusha] and is right next to an empty [kind of bathroom] that is free of excrement. What does [person] need to do?", 5, 12
260217233522, "[person1] has a favorite [kind of chair] that they like to sit on while they do their [activity done sitting]. If you lift up a special cushion, this [kind of chair] has a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person1] is sitting on the chair and releases excrement into the hole. Then [person1] finishes, takes the [kind of container] out of the room, covers the hole in the [kind of chair] with the cushion, and sits back down. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 5, 12
260217233523, "[person1] has a favorite chair that they like to sit on while they do their [activity done sitting]. This is a [kind of chair] with a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person1] is sitting on the chair and releases excrement into the hole. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 5, 12
260217233524, "[person3] has a favorite [kind of chair2] that they like to sit on while they do their [activity done sitting2]. If you lift up a special cushion, this [kind of chair] has a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person3] is sitting on the chair and releases excrement into the hole. Then [person3] finishes, covers the hole in the [kind of chair2] with the cushion, and sits back down. [person2] is nearby and wants to say [a davar kedusha2]. What should [person2] do?", 5, 12
260217233525, "There is a special toilet, which is a [kind of chair2] with a hole in the middle. A [kind of container] fits into a slot beneath the hole. [person1] is sitting on the chair and releases excrement into the hole into the [kind of container]. [person1] finishes, takes out the [kind of container], covers the hole in the [kind of chair2], and leaves. [person2] is nearby and wants to say [a davar kedusha]. What should [person2] do?", 5, 12
260217233526, "There is a special toilet, which is a [kind of chair2] with a hole in the middle. A [kind of container2] fits into a slot beneath the hole. [person3] is sitting on the chair and releases excrement into the hole into the [kind of container2]. [person3] finishes, takes out the [kind of container], and leaves. [person2] is nearby and wants to say [a davar kedusha2]. What should [person2] do?", 5, 12
260217233527, "[person1] has a [type of container] made of [glass or a type of metal] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t smell bad. Can [person1] say [a davar kedusha] near this [type of container]?", 5, 13
260217233528, "[person1] has a [type of container] made of [glass or a type of metal] and designated for putting [excrement or urine]. The [type of container] is clean but still a little bit smelly. Can [person1] say [a davar kedusha2] near this [type of container]?", 5, 13
260217233529, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. Is this considered halachically the same as an outhouse?", 5, 13
260217233530, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t have a bad smell. The [type of container] is full of clean water. Is this [type of container] considered something that needs to be avoided to say [a davar kedusha]?", 5, 13
260217233531, "[person1] has a [type of container] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container] is clean and doesn’t have a bad smell. The [type of container] is turned upside down. Is this [type of container] considered something that needs to be avoided to say [a davar kedusha]?", 5, 13
260217233532, "[person1] has a [type of container3] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container3] is in a room with [person1]. What does [person1] need to do with the [type of container3] to say [a davar kedusha2]?", 5, 13
260217233533, "[person1] owns a pig named [name for a farm animal]. [name for a farm animal] has been diving in the water of the river and is now sticking their head out of the water. They are very clean. How does the halachic status of [name for a farm animal]’s mouth compare to the halachic status of a [type of container] used to put excrement?", 5, 13
260217233534, "[person1] owns a pig named [name for a farm animal]. Can [person2] say [a davar shebikedusha3] while in a [kind of place] with [name for a farm animal]?", 5, 13
260217233535, "[person2] has a [type of container] made of [glass or a type of metal] and designated for putting [excrement or urine]. The [type of container] is a bit dirty. Can [person2] say [a davar kedusha] near this [type of container]?", 5, 13
260217233536, "[person2] has a [type of container2] made of [pottery or wood] and designated for putting [excrement or urine]. The [type of container2] is clean and doesn’t have a bad smell. Is this [type of container2] considered halachically the same as an outhouse?", 5, 13
260217233537, "[person2] is hired to help wash a pig named [name for a farm animal]. When the pig is clean, can [person2] sing [a Jewish song]?", 5, 13
260217233538, "Can [person] say [a common Jewish greeting] to [person1] in a dirty [kind of place]?", 5, 14
260217233542, "Can [person] think about [a davar kedusha] in a room where people bathe?", 5, 14
260217233543, "Can [person] say [a davar shebikedusha] while wearing a [a kind of garment] and nothing else?", 5, 15
260217233544, "Can [person] say [a davar shebikedusha] while young [person1] is bathing nearby?", 5, 15
260217233545, "Can [person1] say [a davar shebikedusha1] while facing [a kind of erva] if [person1] closes their eyes?", 5, 15
260217233546, "Does [man] have to look away from baby [man2] while making the berachas of milah?", 5, 15
260217233547, "Can [person] say [a davar Torah] in front of [person2], who is wearing a [kind of garment] and nothing else?", 5, 15
260217233548, "[man] cannot say [a davar shebikedusha] in front of [woman] because [woman]’s [body part normally covered] is exposed. Does [woman]’s husband [man2] also have to wait to cover this to say [a davar shebikedusha]?", 5, 16
260217233549, "[man] hears [woman1] singing. [man] is learning [a davar Torah]. If he cannot make [woman1] stop singing and cannot go anywhere else, is he allowed to learn [a davar Torah] where he can hear [woman1] singing?", 5, 16
260217233550, "[man1] hears [woman] singing. [man1] has to say Shema. If he cannot make [woman] stop singing and cannot go anywhere else, is he allowed to say Shema where he can hear [woman] singing?", 5, 16
260217233551, "[man1] hears [woman1] singing. [man1] has to say tefillah. If he cannot make [woman1] stop singing and cannot go anywhere else, is he allowed to say tefillah where he can hear [woman1] singing?", 5, 16
260217233552, "[woman]’s [article of clothing] has a hole of diameter [number] inches. Is this considered erva to [man]?", 5, 16
260217233553, "[woman1] is married and usually covers her entire hair with a [head covering]. Can [woman2] talk about [a davar shebikedusha] with [woman1] while [woman1]’s hair is totally exposed?", 5, 16
260217233554, "A tefach is revealed of Mrs. [last name] 's [a body part that women normally cover]. Is this considered erva to Mr. [last name]?", 5, 16
260217233555, "A tefach is revealed of Mrs. [last name2] 's [a body part that women normally cover]. Is this considered erva to Mr. [last name]?", 5, 16
260217233556, "[man] is wearing a [type of garment that covers the whole body]. Can [man] say [a davar shebikedusha]?", 5, 17
260217233557, "[man] is wearing a belt around his waistline underneath [a kind of garment that covers the whole body]. Can [man] say [a davar shebikedusha3]?", 5, 17
260217233558, "[man1] is wearing a robe and presses his robe against his body all the way around his waistline using his arms. Can [man1] say [a davar shebikedusha]?", 5, 17
260217233559, "[man2] is wearing a belt around his waistline on top of a [a kind of garment that covers the whole body2]. Can [man2] say [a davar shebikedusha]?", 5, 17
260217233560, "Can [man] say [a davar shebikedusha] if he is naked in bed?", 5, 17
260217233561, "Can [man1] say [a davar shebikedusha3] if he is only wearing a robe without a belt?", 5, 17
260217233562, "Can [woman] say [a davar shebikedusha2] if she is only wearing a robe without a belt?", 5, 17
260217233563, "[a large number] people urinate in an empty [something large for holding liquid]. How much water needs to be added to the [something large for holding liquid] to allow them to say [a prayer service] nearby?", 5, 2
260217233564, "[a large number] people urinated on the floor of the [kind of place where people play team sports games] during the [kind of sports] game. How much water is needed to nullify the urine so that they can say [a davar shebikedusha] after the game?", 5, 2
260217233565, "[person] has a [kind of container] full of urine. If [person] pours it into a [kind of container2] filled with water, can they say [a davar shebikedusha] nearby?", 5, 2
260217233566, "[person] has two [kind of container]s: one with water and one with urine. Each [kind of container] has [number] reviot of liquid. How can [person] combine the [kind of container]s to let them talk to [person2] tp review halachos?", 5, 2
260217233567, "[person] is in a [kind of place] where someone left excrement. What do they need to do to think about [a davar kedusha]?", 5, 2
260217233568, "[person1] is in a [kind of place1] where [number] people urinated. What do they need to do to think about [a davar kedusha1]?", 5, 2
260217233569, "[person1] is in a [kind of place1] where a [kind of cloth item] is moist from urine. What do they need to do to think about [a davar kedusha2]?", 5, 2
260217233570, "[person1] is in a [kind of place1] where someone urinated into a [kind of liquid container] of water. What do they need to do to think about [a davar kedusha1]?", 5, 2
260217233571, "[person2] is in a [kind of place2] where someone left [a foul-smelling substance]. What do they need to do to think about [a davar kedusha2]?", 5, 2
260217233572, "[person2] is in a [kind of place2] where someone urinated into a [kind of liquid container2] designated for urination. What do they need to do to think about [a davar kedusha2]?", 5, 2
260217233573, "[person2] urinates onto the [something very dry and absorbent]. When [person2] finishes, the surface of the [something very dry] is no longer damp. Can [person1] say [a davar kedusha2] nearby?", 5, 2
260217233574, "[person3] is in a [kind of place2] where the ground is moist from urine. What do they need to do to think about [a davar kedusha3]?", 5, 2
260217233575, "[person3] is in a [kind of place3] where someone urinated. What do they need to do to think about [a davar kedusha3]?", 5, 2
260217233576, "[person3] urinated in [a place]. How much water does he need to pour on the urine to say [a davar kedusha3] in the [a place]?", 5, 2
260217233577, "If [person1] pours a reviit of water onto the urine in a [kind of container used for putting urine], can they say [a davar kedusha1] nearby?", 5, 2
260217233578, "If [person2] covers the feces in the [part of a house] with a [kind of covering], can she say [a davar kedusha2]?", 5, 2
260217233579, "The smell of the [something that smells bad] extends through the [kind of area]. Can [person1] think about [a davar kedusha1] there?", 5, 2
260217233580, "There is a toilet containing urine in the [kind of room]. How much water does [person3] ned to add to let them say [a davar shebikedusha] there?", 5, 2
260217233581, "[person] has a little excrement in the place where it comes out that is covered by their clothes. Can they say [a dvar kedusha]?", 5, 3
260217233582, "[person] has a little excrement on their [body part] that is covered by their clothes. Can they say [a dvar kedusha]?", 5, 3
260217233583, "[person] has a little excrement on their [body part] that is not covered by their clothes. Can they say [a dvar kedusha]?", 5, 3
260217233584, "[person] is in a clean [kind of room] and has to pray. There is a room with human waste on an upper floor. Can [person] pray?", 5, 4
260217233585, "[person1] is [doing activity] in [place1]. Do they need to check for urine or feces nearby before saying [a davar kedusha1]?", 5, 4
260217233586, "[person] is [number] months old and produces excrement. Is their excrement a problem for [person2] to say [a davar shebikedusha]?", 5, 5
260217233587, "[person] is [number] months old and produces urine. Is their urine a problem for [person2] to say [a davar shebikedusha]?", 5, 5
260217233588, "[person] finds a pile of weasel feces while [doing activity] in the [kind of place]. Can [person] say [a davar kedusha2] nearby without cleaning up the weasel feces?", 5, 6
260217233589, "[person] is by a pool of water used to soak cannabis. Can [person] say [a davar shebikedusha]?", 5, 6
260217233590, "[person1] is by a pool of water used to soak flax. Can [person1] say [a davar shebikedusha1]?", 5, 6
260217233591, "[person1] is in a place with a smelly, rotting [type of food]. Can [person] say [a davar shebikedusha1]?", 5, 6
260217233592, "[person1] is in a place with human excrement that doesn’t smell bad. Can [person] say [a davar shebikedusha1]?", 5, 6
260217233593, "[person1] is in a place with turkey excrement that doesn’t smell bad. Can [person1] say [a davar shebikedusha1]?", 5, 6
260217233594, "[person2] finds an open [container] of [type of mammal] droppings under a [kind of furniture] in shul. Can [person2] daven nearby if the [type of mammal] droppings don’t smell?", 5, 6
260217233595, "[person2] is by a [type of body of water] and there is a bad smell. Can [person2] say [a davar shebikedusha2]?", 5, 6
260217233596, "[person2] is in a place with [animal commonly kept as a pet] excrement that doesn’t smell bad. Can [person2] say [a davar shebikedusha2]?", 5, 6
260217233597, "[person2] is in a place with a smelly [type of animal] carcass. Can [person2] say [a davar shebikedusha2]?", 5, 6
260217233598, "[person2] is in a place with cat excrement that doesn’t smell bad. Can [person2] say [a davar shebikedusha2]?", 5, 6
260217233599, "[person3] is in a chicken coop. Can [person3] say [a davar shebikedusha3]?", 5, 6
260217233600, "[person3] is in a place with [type of bird] excrement. Can [person3] say [a davar shebikedusha3]?", 5, 6
260217233601, "[person] is in a room with a lot of excrement, and this excrement is frozen and very brittle and thus doesn’t smell. Can [person] say [a davar shebikedusha2]?", 5, 7
260217233602, "[person] is in a room with a lot of excrement, and this excrement is very dry and crumbly and doesn’t smell. Can [person] say [a davar shebikedusha]?", 5, 7
260217233603, "[person2] is in a [kind of place] with excrement that is covered by snow. Can [person2] say [a davar shebikedusha]?", 5, 7
260217233604, "[person2] is in a room with a lot of excrement, and this excrement is very dry and crumbly and smells bad. Can [person2] say [a davar shebikedusha2]?", 5, 7
260217233605, "There is excrement behind [person] and it doesn’t smell even up close. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
260217233606, "There is excrement behind [person], who doesn’t have a sense of smell. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
260217233607, "There is excrement in front of [person]. At night, how far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
260217233608, "There is excrement in front of [person]. During the day, how far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
260217233609, "There is excrement off to the side of [person]. How can [person] say [a davar kedusha] without going very far away?", 5, 8
260217233610, "There is excrement off to the side of [person]. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
260217233611, "There is smelly excrement behind [person]. How far away from the excrement does [person] need to go to say [a davar kedusha]?", 5, 8
260217233612, "[person] is serving as a shaliach tzibur for a group of Jews’ tefilah. If excrement is found in the same room but it is behind the shaliach tzibur and the smell doesn’t extend within four amot of the shaliach tzibur, then can they go ahead and daven?", 5, 9
260217233613, "After eating [a meal], what kind of plan does [person] need to make before they start to make the beracha?", 6, 1
260217233614, "Can [person] bless [a beracha that a person says to hashem] while doing [action that a person has to take in daily life]?", 6, 1
260217233615, "Can [person] say [a beracha after eating food] while doing [an activity done to clean off after a meal]?", 6, 1
260217233616, "How loudly does [person2] generally say the beracha [a beracha]?", 6, 1
260217233617, "If [person1] is saying [a series of berachas] by rote and doesn’t know exactly what beracha they are up to after saying “baruch atah,” should they just keep going?", 6, 1
260217233618, "When [person2] blesses [a beracha that a person says to hashem2] in daily life, how loud do they generally speak?", 6, 1
260217233619, "[person] has [something that goes in a person's mouth] in their mouth. Can [person] say [a beracha]?", 6, 2
260217233620, "[person] has saliva in their mouth. Can [person] say [a beracha]?", 6, 2
260217233621, "[person] is with their friend [person2] and making jokes. Can [person] make a beracha on [a kind of beverage] while in a completely silly mood?", 6, 3
260217233622, "Can [person] say that [person1] shouldn’t be blessed with [a good thing that a person wants in their life]?", 6, 3
260217233623, "Can [person1] refer to and say [a name of Hashem] over and over for fun?", 6, 3
260217233624, "Can [person2] write the word [a word for Hashem in any language]?", 6, 3`;







































































































































































































































































































































































































































































































































































































































































































































































































