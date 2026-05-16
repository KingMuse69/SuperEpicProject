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
    "Aqua Necklace": {
        image: "aq_stand.png",
        stats: "aq_stats.png",
        link: "https://www.youtube.com/watch?v=0tjmAAdTrlM",
        power: "Aqua Necklace's primary ability is a completely liquid and malleable form, allowing it to sneak, infiltrate, and inflict lethal damage from the inside."
    },
    "Aqua Necklace": {
        image: "aq_stand.png",
        stats: "aq_stats.png",
        link: "https://www.youtube.com/watch?v=0tjmAAdTrlM",
        power: "Aqua Necklace's primary ability is a completely liquid and malleable form, allowing it to sneak, infiltrate, and inflict lethal damage from the inside."
    },
}