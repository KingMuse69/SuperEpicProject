// Part 4 Stand Catalog
const part4Data = {
    "Crazy Diamond": {
        image: "cd_stand.png",
        stats: "cd_stats.png",
        link: "https://www.youtube.com/watch?v=cWGE9Gi0bB0",
        power: "Crazy Diamond's unique ability is to restore objects or organisms through touch. It can repair the damage, heal injuries, revert chemical changes and complex structures to their raw components (e.g. a plate of spaghetti back into its raw ingredients). It may also fuse objects, for example, a person with a rock (as with villain Anjuro Katagiri). When restoring a divided object, the user is able to control which part acts as the starting points for the rest to gather towards."
    },
    "The Hand": {
        image: "hand_stand.png",
        stats: "hand_stats.png",
        link: "https://www.youtube.com/watch?v=FFqb1I-hiHE",
        power: "Anything The Hand's right palm touches when it does a swiping motion with its arm is erased from this universe, be it physical matters or space itself. Okuyasu states that not even he knows where the voided objects go. Objects that are subjected to the ability appear as if an extremely sharp blade had sliced clean through them. Whenever The Hand erases something, the resulting voided space is unable to sustain itself, and reality will immediately be filled and 'stitched up' by adjacent space and objects."
    },
    "Heavens Door": {
        image: "hd_stand.png",
        stats: "hd_stats.png",
        link: "https://www.youtube.com/watch?v=k04tX2fvh0o",
        power: "Heaven's Door's basic ability is to turn people into books, pages unfurling from their bodies in the shape of whatever body part it opens from. Targets may be incapacitated to varying degrees while under this effect, from barely being able to walk to being completely knocked out. The contents of the books contain detailed and absolutely true information on their subject, including physical characteristics, personality, and all of their memories and thoughts."
    },
    "Star Platinum": {
        image: "sp_stand.png",
        stats: "sp_stats.png",
        link: "https://www.youtube.com/watch?v=oG7jKUHsLfY",
        power: "Star Platinum's primary ability is to manipulate time within a limited range, allowing it to slow down or stop time for a short period. This ability is particularly useful for avoiding attacks or gaining an advantage in combat. Additionally, Star Platinum can create a barrier of energy that protects the user from harm."
    },
    "Echoes ACT 1": {
        image: "echoes1_stand.png",
        stats: "echoes1_stats.png",
        link: "https://www.youtube.com/watch?v=OcDiOUQBFd4",
        power: "In ACT1 form, Echoes is a long-range Stand. It is very weak, its punch failing to hurt Tamami, and also slow. However, it has the longest range of all Acts and can go up to about 50 meters from its user, and it's suggested that either Koichi can see through ACT1's eyes, or it can report back to him, making it useful for scouting an area."
    },
    "The Lock": {
        image: "tl_stand.png",
        stats: "tl_stats.png",
        link: "https://www.youtube.com/watch?v=QB9Feedxkjk",
        power: "By making someone feel guilty, Tamami can summon The Lock, which appears bound to the victim's chest. Afterward, their guilt is multiplied continuously and can add up with other accusations, represented by The Lock growing bigger and heavier. The Lock will stay indefinitely even if it is moved away from Tamami, until the victim either feels so guilty they commit suicide, Tamami willingly cancels The Lock, or the source of the guilt disappears."
    },
    "Surface": {
        image: "ts_stand.png",
        stats: "ts_stats.png",
        link: "https://www.youtube.com/watch?v=_Sz2HOAb54w",
        power: "Surface's primary ability is to copy the appearance of another person. If the mannequin is touched by someone, it will perfectly copy that person's appearance, voice, and mannerisms, down to the fingerprints, as noted by Josuke. However, a screw on Surface's forehead enables people to tell them apart. As a Stand bound to a mannequin, no damage done to Surface will be reflected in Hazamada."
    },
    "Aqua Necklace": {
        image: "aq_stand.png",
        stats: "aq_stats.png",
        link: "https://www.youtube.com/watch?v=0tjmAAdTrlM",
        power: "Aqua Necklace's primary ability is a completely liquid and malleable form, allowing it to sneak, infiltrate, and inflict lethal damage from the inside."
    },
    "Bad Company": {
        image: "bc_stand.png",
        stats: "bc_stats.png",
        link: "https://www.youtube.com/watch?v=JXQJpyQBShU",
        power: "Bad Company is a battalion of miniature soldiers and military vehicles and is equipped as such. Each of Bad Company's soldiers is armed with an M16 assault rifles, a parachute, and combat knives. The Green Berets have the same equipment as the soldiers, but with the addition of a rappelling rope which allows them to climb objects or descend onto targets from above. The helicopters are armed with machine guns and missiles, and the tanks have scaled-down shells. Bad Company is also equipped with land mines"
    },
    "Love Deluxe": {
        image: "ld_stand.png",
        stats: "ld_stats.png",
        link: "https://www.youtube.com/watch?v=CtthQ_JotFU",
        power: "Love Deluxe is bound to Yukako's hair, allowing it to grow to various lengths and move with considerable strength and dexterity. Love Deluxe is precise enough that the hair can tie something as small as a tongue, but is also powerful enough to completely bind and immobilize someone. When angered, Yukako can unleash Love Deluxe and make her hair grow so long, it can cover and invade an entire house"
    },
    "Red Hot Chili Peppers": {
        image: "rhcp_stand.png",
        stats: "rhcp_stats.png",
        link: "https://www.youtube.com/watch?v=YlUKcNNmywk",
        power: "Red Hot Chili Pepper is a long range Stand based on electricity whose dangerousness increases dramatically when it is near electricity. Not only does its range and ability to pass through electrical systems make Otoishi impossible to find, when powered-up, it can physically overwhelm and outpace Crazy Diamond.[4][5] On the other hand, it is very dependent on its power source to act"
    },
    "Echoes ACT 2": {
        image: "echoes2_stand.png",
        stats: "echoes2_stats.png",
        link: "https://www.youtube.com/watch?v=OcDiOUQBFd4",
        power: "Although ACT2 is still physically weak, it now possesses a stronger and more versatile power than its previous form, making it more suited to direct confrontation. Foreshadowing the speed of ACT3, ACT2 also gains a massive increase in speed - fast enough to give the impression of disappearing into the air. Since it also has a long range (and Koichi can likely see through its eyes), as well as newfound speed, ACT2 is also used for scouting."
    },
    "Pearl Jam": {
        image: "pj_stand.png",
        stats: "pj_stats.png",
        link: "https://www.youtube.com/watch?v=tNDWJ_KDkAc",
        power: "Pearl Jam has the ability to infuse itself into Tonio's culinary creations and cure the consumers ailments upon ingestion by enhancing the natural curative properties of the ingredients in a particular dish. The limits of this ability are unknown, though it can heal normally incurable illnesses provided the right ingredients are involved. After Tonio diagnoses specific ailments through palm reading,[3] he prepares a high-class dish, and in the process, infuses Pearl Jam into it. It is unknown whether Pearl Jam influences the eater's perception of the dish or not, between Okuyasu Nijimura's overenthusiastic reactions to each dish and Tonio's inherent skill as cook, the answer is unclear. However, anyone who has tasted a dish of his acknowledged that it was delicious."
    },
    "Ratt": {
        image: "ratt_stand.png",
        stats: "ratt_stats.png",
        link: "https://www.youtube.com/watch?v=0u8teXR8VE4",
        power: "Ratt is a miniature cannon that can fire off barbed darts which will melt anything upon impact, be it flesh or even metal. Ratt can shoot its dart up to 60 meters away, fire in bursts, and can even bounce the dart off obstacles to hit from blind spots. Once hit, a large part of the body will immediately melt into organic material, a nearly impossible to heal injury that only Crazy Diamond could undo. The melted victims can then be molded into a shape such as a cube if multiple victims are clumped together, in which case the melted flesh fuses together and eventually takes a gelatinous texture."
    },
    "Echoes ACT 3": {
        image: "echoes3_stand.png",
        stats: "echoes3_stats.png",
        link: "https://www.youtube.com/watch?v=OcDiOUQBFd4",
        power: "ACT3's signature ability, with which it applies a freezing or stopping effect by greatly increasing the weight of its target by punching it, typically adopting a fighting stance while joining the hands together while doing so and producing an aura. For example, Killer Queen's Sheer Heart Attack is forcibly sunk into the pavement by this ability, and, according to its user, the effects were as if there were 40-50 kilograms of weight on his left hand. The weight increase does have drawbacks: 3 Freeze can only affect one thing at a time, and the effect ceases if the target moves more than 5 meters away from Koichi. The closer the target is to Koichi, the heavier it feels."
    },
    "Cinderella": {
        image: "c_stand.png",
        stats: "c_stats.png",
        link: "https://www.youtube.com/watch?v=i28UEoLXVFQ",
        power: "Cinderella is able to replace select parts of one's outer body by creating a replacement for it from the slots on its hand and then sliding the hand into the body to replace said part. Determining what a client should look like via a computer program,[2] Aya can then modify whatever she believes needs to be modified at her leisure. Because of the rules of physiognomy, by altering their outward appearance, she is able to modify their destiny. She primarily uses this power to change her clients love life in whatever way they have paid her to do. The client must remain immobile during the body part replacement process, or Aya may botch the procedure. The effects are temporary and last only 30 minutes; Aya uses that weakness as a business tool to push her clients into continuously coming back."
    },
    "Harvest": {
        image: "h_stand.png",
        stats: "h_stats.png",
        link: "https://www.youtube.com/watch?v=fOUNzIbz9K4",
        power: "Harvest is a long range colony Stand one can underestimate because of its and Shigechi's innocuous appearance, its basic power, and the petty way in which it is used to gather lost coins and other knickknacks across Morioh. However, the number of units coupled with their ability to still punch into the flesh means that Harvest can easily overwhelm even Josuke and Okuyasu,[2] and Shigechi is imaginative in the way he uses his Stand, making it a force to be reckoned with in battle."
    },
    "Boy 2 Man": {
        image: "b2m_stand.png",
        stats: "b2m_stats.png",
        link: "https://www.youtube.com/watch?v=zDKO6XYXioc",
        power: "Boy II Man's power is to steal the energy of an opponent whenever Ken beats them in a game of Rock Paper ScissorsW[2] (RPS). If Ken proposes to play a game of RPS and the opponent formally accepts, Boy II Man sets up a best-three-out-of-five game of RPS with the following rules: A draw nulls the round and it has to be played again until someone wins. Every time Ken wins a round, he takes a third of his opponent's energy and Stand. If the opponent manages to win three times, any of their energy that was previously stolen is returned to them and the game ends. When Ken wins a round, Boy II Man appears to take away one third of the opponent's Stand power. For instance, it literally tears away a third of Heaven's Door body and absorbs it inside the hole on Ken's cheek. Rohan is unharmed by the energy theft, but the corresponding body part begins to tire and falls under the control of Ken who can move it as he wants."
    },
    "Highway Star": {
        image: "hs_stand.png",
        stats: "hs_stats.png",
        link: "https://www.youtube.com/watch?v=Wr9ie2J2690",
        power: "Highway Star is a long-range Stand; defined by mediocre fighting power and a long range of action with above average speed, which enables Yuya to pilot his Stand rather precisely while resting far from danger. Highway Star possesses a disjointed set of powers that make fighting it a perilous endeavor, and even Josuke must flee the Stand to find the user and beat him. Two of its basic but most remarkable characteristics are its speed and range: Highway Star can run up to 60 km/h (roughly 37 mp/h) and indefinitely maintain that running speed in order to chase after its prey;[3] moreover its chase after Josuke around Morioh while Yuya was in Grape Hills Hospital[4] demonstrates its great range. It is also able to throw a brief punching barrage."
    },
    "Super Fly": {
        image: "sf_stand.png",
        stats: "sf_stats.png",
        link: "https://www.youtube.com/watch?v=muLcm3_JSR4",
        power: "Super Fly's defining ability is that it imprisons one occupant inside it. It is mentioned that the energy of the sole prisoner is how it sustains itself. Toyohiro is the first prisoner of the tower and cannot leave until someone else steps in it. If that happens, the first of the two to exit the tower is free to leave while the other one must stay inside. Leaving the tower only requires not standing inside the structure, thus Toyohiro could hang on the side of Super Fly while Josuke was trapped. If the victim attempts to escape it, they will be covered in steel to restrict their movements. It is possible the victim could be perpetually covered if they do not pull themselves back in time and Toyohiro claims that any would-be escapee will be absorbed into the tower."
    },
    "Earth, Wind & Fire": {
        image: "ewf_stand.png",
        stats: "ewf_stats.png",
        link: "https://www.youtube.com/watch?v=131OjWrdYwc",
        power: "Earth Wind and Fire allows Mikitaka to transform into any object. When transforming, Mikitaka decomposes himself into a cluster of strips of an unidentified substance before recomposing himself into an object of his choosing, replicating its appearance, weight, and texture. He is also able to split himself mid-transformation so as to form several objects, such as splitting himself in two to become a pair of sneakers. When transformed into an object, he also takes on the properties of the object. For example, morphing his hand into an ice cream cone will make it cold, and morphing himself into a pair of binoculars enables him to observe things from afar. He can also partially undo the transformation."
    },
    "Cheap Trick": {
        image: "ct_stand.png",
        stats: "ct_stats.png",
        link: "https://www.youtube.com/watch?v=2u6uXuT9pm4",
        power: "Cheap Trick's signature ability is to attach itself to its user's back, beginning with its original user Masazo Kinoto. Cheap Trick then actively and relentlessly seeks to make someone else look at the current user's back, being especially dangerous when the host is asleep because it can then act unnoticed. If someone does look at the current user's back, Cheap Trick detaches from the host, killing them in the process, and attaches itself to the looker's back, beginning its process anew. When Cheap Trick transfers to a new host, the previous one is reduced to a dried-up doll-sized version of themselves as a result of Cheap Trick sucking out their life force upon detachment."
    },
    "Enigma": {
        image: "enigma_stand.png",
        stats: "enigma_stats.png",
        link: "https://www.youtube.com/watch?v=x4maoo4A3x4",
        power: "Enigma is able to transform objects and people, including the user, into pieces of paper.[2] Once transformed, the paper must be kept folded to keep the target transformed. If the paper is unfolded, the trapped object or person is released. Anyone can unfold the paper and release the trapped target. The condition of the object or person trapped in the paper remains the same as long as the paper is kept in one piece, but damaging the piece of paper results in an equivalent amount of damage on said object or person. For simple objects and animals, Enigma can simply apply its ability. However, to trap a person in paper, the user must discover the habits the target displays when afraid.[3] Once he has witnessed them display their habit enough to be 100% sure it's their tell, the Stand can capture the target the next time they display their tell. When its ability is activated, part of the object is literally transformed into paper and the rest of it is slowly but inexorably absorbed."
    },
    "Killer Queen": {
        image: "kq_stand.png",
        stats: "kq_stats.png",
        link: "https://www.youtube.com/watch?v=cBMXQrW3VNA",
        power: "Killer Queen may charge any object, inanimate or not, as a bomb simply by touching it. Once a target has touched the object, Killer Queen can detonate the target by pressing its right thumb onto a trigger located on its index fingers middle phalanx, imitating the action of pressing down on a handheld detonator. If someone else touches the charged target before Kira can detonate it, they will automatically be blown up instead, consuming the charge. This can also be done through direct contact with Killer Queen or Kira himself, skipping the charging process.It seems that the explosion, while it doesn't harm the environment, does cause damage to people nearby (to a weaker extent), as seen in the case of Shigechi being hurt at point blank range, but not outright killed. This is also seen when Kira detonates one of Stray Cats air bullets, harming Josuke, but not blowing him up outright. The trigger for the explosion does not blow up"
    },
    "Sheer Heart Attack": {
        image: "sha_stand.png",
        stats: "sha_stats.png",
        link: "https://www.youtube.com/watch?v=rkHF_JMnB8o",
        power: "This treaded automatic bomb detaches from Killer Queen's left hand, so any Stand abilities activated upon it are reflected onto Kira's left hand. Because Sheer Heart Attack is attached to Kira's left hand, the primary bomb can still be used when Sheer Heart Attack is active. It is completely autonomous and has a great range, so Kira can safely engage Sheer Heart Attack and move a great distance away while it carries out its duties. It seeks out whatever the warmest object in the vicinity is, even changing targets the second a warmer object appears; upon reaching its target, it automatically induces an explosion with power and blast size equivalent to the heat of the target. If Sheer Heart Attack's explosion was set off by a non-human source, it will continue to seek out targets until it explodes from a human. Like Killer Queen's first bomb, Sheer Heart Attack's explosions remove all physical evidence of the target."
    },
    "Stray Cat": {
        image: "sc_stand.png",
        stats: "sc_stats.png",
        link: "https://www.youtube.com/watch?v=mbAyj1h9vI0",
        power: "Stray Cat has the ability to control the surrounding air with its whiskers. Stray Cat's main usage of this ability is to make invisible bubbles of compressed air and shoot them toward its targets, but can also shield itself from attacks. It is initially shown to curl up its petals to do so, but that quirk disappears afterward. The bubbles are durable enough to block Killer Queen's kick and even Crazy Diamond's punches and when shot, have enough force to severely wound somebody or kill them at point-blank range; if it feels particularly vicious, it can even force a small bubble inside one's bloodstream and try to cause an embolism. When they hit, a cat's pawprint is visible inside the impact zone. They are also invisible and can be remotely burst by Stray Cat if it wishes.[6] However, the bubbles can be popped like a balloon."
    },
    "Bites the Dust": {
        image: "btd_stand.png",
        stats: "btd_stats.png",
        link: "https://www.youtube.com/watch?v=OdurVND-DSs",
        power: "This bomb appears as a miniaturized form of Killer Queen that hides inside whoever it is planted in; it acts independently of Kira's will, manifesting only when the bomb is triggered. When planted in Hayato, it activates when Kira's identity is revealed audibly or through writing, as well as when other Stand users see the miniature Killer Queen. When this happens, a miniature Killer Queen enters the eye of the person and causes an explosion, killing them. The bomb can detonate multiple people simultaneously. After killing someone with its power, Bites the Dust creates a temporal loop, blowing up time to roughly one hour prior to the detonation. Because Bites the Dust is completely independent and autonomous, Kira is not aware of who is killed by it, nor is he directly aware of whether a time loop has taken place. In fact, the only person who retains the memory of each time loop is the person harboring Bites the Dust. All actions performed in the previous time loop are destined to occur as they had happened. Slight deviations may happen, but any person killed by Bites the Dust in a previous time loop is destined to explode at the exact time that they were previously killed, even if they did not re-activate Bites the Dust in the current timeline."
    }
}