// Part 6 Stand Catalog
const part6Data = {
    "Stone Free": {
        image: "stonefree_stand.png",
        stats: "stonefree_stats.png",
        link: "https://www.youtube.com/watch?v=66COu2TpcyQ",
        power: "Stone Free enables Jolyne to unravel her body into string, typically beginning with her hands, and freely manipulate it. Stone Free's string is invisible to non-Stand Users but it is portrayed inconsistently. It is also sharp as it can slice through flesh when pulled violently enough (however, this too is portrayed inconsistently). On the other hand, the string is not particularly strong and may snap if strained too much, although Jolyne can create a stronger rope out of several strings. With enough precision, the string can pickpocket small objects that way. The string can contract and expand like muscles, allowing Stone Free to control the grip a string has. It has also been shown that as Jolyne's body is the part that turns to string, she is able to physically touch and harm a Stand, holding some physical properties of being her own Stand. However, by the same token, others (in particular Stand users) can touch and even break strings created by Jolyne with no apparent harm to her."
    },
    "KISS": {
        image: "kiss_stand.png",
        stats: "kiss_stats.png",
        link: "https://www.youtube.com/watch?v=FhO_jnKl4pk",
        power: "Kiss is able to place lip-designed stickers on objects, causing them to rapidly produce an exact copy of the original. Ermes and Kiss are able to create distinctive square stickers out of their palms. If they put a sticker on an object, an exact copy of it emerges with the sticker either remaining on the copy or the original. There is no restriction on how far the copy can be taken away from the object. If Ermes places a sticker on someone, the corresponding limb, be it a finger, an arm or the head, will sprout out of the body like an additional body part. She is also free to use it on herself. When the sticker is removed or destroyed, the two objects spring toward each other and fuse back into one object with great force, causing a fissure and effectively damaging it. No matter the distance, the surrounding conditions like shifted gravity, or the weight attached to them, the two will always head toward each other, even broken parts of the copy will return to the original. It allows Ermes to create traps, or depending on the object, to move rapidly from one place to another, or even plainly damage someone from afar"
    },
    "Foo Fighters": {
        image: "foofighters_stand.png",
        stats: "foofighters_stats.png",
        link: "https://www.youtube.com/watch?v=SBjQ9tuuTJQ",
        power: "Foo Fighters' peculiar nature as a sentient colony of plankton gives it several abilities. First and foremost, Foo Fighters' nature means that it has no physical weakness. There is no limb to hurt or vital point to strike in order to kill it and thus it is impervious to conventional attacks. Only by damaging the whole colony can Foo Fighters be threatened. Although fragile individually, the colony can muster enough strength to pry open an automatic door. As a hive mind, Foo Fighters is able to produce sub-bodies by splitting the colony into several like-minded but independent parts. This ability allows Foo Fighters to effectively fight multiple opponents and generally act stealthily in the middle of battle. Even if a large majority of the plankton dies, only one needs to survive in order for Foo Fighters to be able to regenerate. As long as there is water, the plankton colony can rapidly multiply, creating a new part of Foo Fighters rapidly and giving it great regeneration ability. With enough water, Foo Fighters can even cover a whole room and use its mass to attack"
    },
    "Diver Down": {
        image: "dd_stand.png",
        stats: "dd_stats.png",
        link: "https://www.youtube.com/watch?v=YjOKti90xQA",
        power: "Diver Down's signature ability is to phase through solids and then freely change their insides. By plunging inside an object or person, Diver Down can freely manipulate their internal structure; either to destroy them or piece them together anew. It can even dive into Stands to modify their structures, as when Anasui grafted a frog's brain into Yo-Yo Ma. Through this ability, Anasui can create complex structures like spring traps or freely change the whole form of the object, for instance displacing the opening and neck of a bottle along its side or changing someone's bone structure and muscle into springs. Diver Down can forcibly remove harmful but impossible to sever objects like parasitic plants in Jolyne's's body or do the reverse and embed foreign objects inside the body, like chocolates to change the shape of Anasui's face"
    },
    "Weather Report": {
        image: "wr_stand.png",
        stats: "wr_stats.png",
        link: "https://www.youtube.com/watch?v=HEU-m_KVuYI",
        power: "Weather Report's ability is to control the weather through the manipulation of the atmosphere itself. Weather manipulates the surrounding atmosphere with his Stand, allowing him to freely summon several weather phenomena like wind, rain, or lightning to his advantage. Weather Report has enough precision that it can create micro-climates, but also a range great enough that it can make it rain 30 km away. The scale of the phenomena is also controllable; thus Weather Report can create heavy rain and fog over a large zone, but also a small sunny area in the middle of the rain."
    },
    "Burning Down The House": {
        image: "bdth_stand.png",
        stats: "bdth_stats.png",
        link: "https://www.youtube.com/watch?v=_3eC35LoF4U",
        power: "Burning Down the House allows Emporio to see, touch and use the ghosts of objects and rooms. In 1984, Green Dolphin Street Prison caught fire and several rooms were completely burned down and eventually replaced through renovations. Emporio is able to see and use the ghosts of the objects destroyed in the fire, but also access the destroyed piano room through a hidden crack on a wall. Due to their nature, the objects are of limited use; for instance, a ghost chocolate bar can be tasted but not eaten as it falls through Emporio's mouth. However, he was able to use a ghost computer freely to do research. He can fit ghost objects in his pockets or a tiny bag regardless of their size."
    },
    "Goo Goo Dolls": {
        image: "googoodolls_stand.png",
        stats: "googoodolls_stats.png",
        link: "https://www.youtube.com/watch?v=NdYWuo9OFAw",
        power: "Goo Goo Dolls has the ability to reduce the size of anyone within its range. It is hinted that it will work only on those targeted by Gwess' desire for friendship and control. When in range, Goo Goo Dolls can instantly shrink its victim to the size of a mouse, the size reduction is instantaneous and unnoticeable at first by the victim. On the other side, once a shrunken victim goes far enough from Gwess, they will grow back continuously. Gwess typically uses this power to get herself makeshift pets that she hides inside animal skins and plays with."
    },
    "Manhattan Transfer": {
        image: "mant_stand.png",
        stats: "mant_stats.png",
        link: "https://www.youtube.com/watch?v=ARfARi-gpWc",
        power: "Manhattan Transfer is able to read the air currents around it and react accordingly. The Stand can precisely sense the movements of the air around it, and transfer the information to Johngalli A. who can visualize what is happening around Manhattan Transfer with precision, guess the position of his target and even have an idea of their general appearance. Manhattan Transfer floats along air currents moving erratically, but then is able to move whenever it senses an object moving towards it through air current. Its precision is such that it can effortlessly avoid many falling water drops. Because it is dependent on reading air current, it is possible to fool Johngalli A. into misreading the wind, as creating different layers of gases will result in the distortion of the air currents."
    },
    "Highway To Hell": {
        image: "h2h_stand.png",
        stats: "h2h_stats.png",
        link: "https://www.youtube.com/watch?v=l482T0yNkeo",
        power: "Highway to Hell possesses no combat ability whatsoever, but its ability to share damage, combined with Thunder McQueen's pathologically suicidal tendency, makes it a surprisingly dangerous Stand. When McQueen attempts to kill himself, he can also make someone die alongside him in the same way he does. When McQueen applies Highway to Hell on someone, the target will suffer the same damage he inflicts upon himself, through Highway to Hell manifesting itself on the victims body as the source of the harm. For instance, if McQueen tries to hang himself, Highway to Hell manifests itself around the victim's neck with traces of a noose crushing their throat; when McQueen tries to drown himself, Highway to Hell appears as a liquid mass covering the mouth and nose of the victim. Highway to Hell's stats even suggest that McQueen starving himself could possibly work. Moreover, the person linked to McQueen also takes the same pose as him."
    },
    "Marilyn Manson": {
        image: "mm_stand.png",
        stats: "mm_stats.png",
        link: "https://www.youtube.com/watch?v=WPlO_iEWFQc",
        power: "After the User and a potential victim bet on something and the victim loses, Marilyn Manson comes to collect the wager or anything equivalent. Like Osiris and Atum, Marilyn Manson activates after Miraschon or even itself makes a bet with someone. If the person with whom Miraschon bets with loses, Marilyn Manson materializes near them and proceeds to take from them any possession of value in order to pay up. Money directly flies into Marilyn Manson's hooks, but it can also mutilate the victim to take valuable body parts to sell to the black market, like gold teeth or their liver. It thinks by itself of what to collect in order to have the equivalent of the wager but refuses to collect anything that doesn't rightfully belong to the victim like stolen money, knowing this thanks to its ability to read the victim's mind. Marilyn Manson claims that it is merely the shadow within the loser's heart, who has recognized even slightly their loss, and therefore it cannot be attacked either by the loser or any ally. Hits simply phase through Marilyn Manson. It has been described in its stats as the victim acknowledging their fault and being unconsciously unable to defend themselves against what they recognize as a "legitimate" debt collection. Likewise, Marilyn Manson can overpower a Stand User who thinks of attacking Miraschon directly."
    },
    "Jumpin Jack Flash": {
        image: "jjf_stand.png",
        stats: "jjf_stats.png",
        link: "https://www.youtube.com/watch?v=YlUKcNNmywk",
        power: "Red Hot Chili Pepper is a long range Stand based on electricity whose dangerousness increases dramatically when it is near electricity. Not only does its range and ability to pass through electrical systems make Otoishi impossible to find, when powered-up, it can physically overwhelm and outpace Crazy Diamond.[4][5] On the other hand, it is very dependent on its power source to act"
    },
    "Limp Bizkit": {
        image: "echoes2_stand.png",
        stats: "echoes2_stats.png",
        link: "https://www.youtube.com/watch?v=OcDiOUQBFd4",
        power: "Although ACT2 is still physically weak, it now possesses a stronger and more versatile power than its previous form, making it more suited to direct confrontation. Foreshadowing the speed of ACT3, ACT2 also gains a massive increase in speed - fast enough to give the impression of disappearing into the air. Since it also has a long range (and Koichi can likely see through its eyes), as well as newfound speed, ACT2 is also used for scouting."
    },
    "Survivor": {
        image: "pj_stand.png",
        stats: "pj_stats.png",
        link: "https://www.youtube.com/watch?v=tNDWJ_KDkAc",
        power: "Pearl Jam has the ability to infuse itself into Tonio's culinary creations and cure the consumers ailments upon ingestion by enhancing the natural curative properties of the ingredients in a particular dish. The limits of this ability are unknown, though it can heal normally incurable illnesses provided the right ingredients are involved. After Tonio diagnoses specific ailments through palm reading,[3] he prepares a high-class dish, and in the process, infuses Pearl Jam into it. It is unknown whether Pearl Jam influences the eater's perception of the dish or not, between Okuyasu Nijimura's overenthusiastic reactions to each dish and Tonio's inherent skill as cook, the answer is unclear. However, anyone who has tasted a dish of his acknowledged that it was delicious."
    },
    "Planet Waves": {
        image: "ratt_stand.png",
        stats: "ratt_stats.png",
        link: "https://www.youtube.com/watch?v=0u8teXR8VE4",
        power: "Ratt is a miniature cannon that can fire off barbed darts which will melt anything upon impact, be it flesh or even metal. Ratt can shoot its dart up to 60 meters away, fire in bursts, and can even bounce the dart off obstacles to hit from blind spots. Once hit, a large part of the body will immediately melt into organic material, a nearly impossible to heal injury that only Crazy Diamond could undo. The melted victims can then be molded into a shape such as a cube if multiple victims are clumped together, in which case the melted flesh fuses together and eventually takes a gelatinous texture."
    },
    "Dragons Dream": {
        image: "echoes3_stand.png",
        stats: "echoes3_stats.png",
        link: "https://www.youtube.com/watch?v=OcDiOUQBFd4",
        power: "ACT3's signature ability, with which it applies a freezing or stopping effect by greatly increasing the weight of its target by punching it, typically adopting a fighting stance while joining the hands together while doing so and producing an aura. For example, Killer Queen's Sheer Heart Attack is forcibly sunk into the pavement by this ability, and, according to its user, the effects were as if there were 40-50 kilograms of weight on his left hand. The weight increase does have drawbacks: 3 Freeze can only affect one thing at a time, and the effect ceases if the target moves more than 5 meters away from Koichi. The closer the target is to Koichi, the heavier it feels."
    },
    "Yo-Yo Ma": {
        image: "c_stand.png",
        stats: "c_stats.png",
        link: "https://www.youtube.com/watch?v=i28UEoLXVFQ",
        power: "Cinderella is able to replace select parts of one's outer body by creating a replacement for it from the slots on its hand and then sliding the hand into the body to replace said part. Determining what a client should look like via a computer program,[2] Aya can then modify whatever she believes needs to be modified at her leisure. Because of the rules of physiognomy, by altering their outward appearance, she is able to modify their destiny. She primarily uses this power to change her clients love life in whatever way they have paid her to do. The client must remain immobile during the body part replacement process, or Aya may botch the procedure. The effects are temporary and last only 30 minutes; Aya uses that weakness as a business tool to push her clients into continuously coming back."
    },
    "Green Green Grass of Home": {
        image: "h_stand.png",
        stats: "h_stats.png",
        link: "https://www.youtube.com/watch?v=fOUNzIbz9K4",
        power: "Harvest is a long range colony Stand one can underestimate because of its and Shigechi's innocuous appearance, its basic power, and the petty way in which it is used to gather lost coins and other knickknacks across Morioh. However, the number of units coupled with their ability to still punch into the flesh means that Harvest can easily overwhelm even Josuke and Okuyasu,[2] and Shigechi is imaginative in the way he uses his Stand, making it a force to be reckoned with in battle."
    },
    "Jail House Lock": {
        image: "b2m_stand.png",
        stats: "b2m_stats.png",
        link: "https://www.youtube.com/watch?v=zDKO6XYXioc",
        power: "Boy II Man's power is to steal the energy of an opponent whenever Ken beats them in a game of Rock Paper ScissorsW[2] (RPS). If Ken proposes to play a game of RPS and the opponent formally accepts, Boy II Man sets up a best-three-out-of-five game of RPS with the following rules: A draw nulls the round and it has to be played again until someone wins. Every time Ken wins a round, he takes a third of his opponent's energy and Stand. If the opponent manages to win three times, any of their energy that was previously stolen is returned to them and the game ends. When Ken wins a round, Boy II Man appears to take away one third of the opponent's Stand power. For instance, it literally tears away a third of Heaven's Door body and absorbs it inside the hole on Ken's cheek. Rohan is unharmed by the energy theft, but the corresponding body part begins to tire and falls under the control of Ken who can move it as he wants."
    },
    "Bohemian Rhapsody": {
        image: "hs_stand.png",
        stats: "hs_stats.png",
        link: "https://www.youtube.com/watch?v=Wr9ie2J2690",
        power: "Highway Star is a long-range Stand; defined by mediocre fighting power and a long range of action with above average speed, which enables Yuya to pilot his Stand rather precisely while resting far from danger. Highway Star possesses a disjointed set of powers that make fighting it a perilous endeavor, and even Josuke must flee the Stand to find the user and beat him. Two of its basic but most remarkable characteristics are its speed and range: Highway Star can run up to 60 km/h (roughly 37 mp/h) and indefinitely maintain that running speed in order to chase after its prey;[3] moreover its chase after Josuke around Morioh while Yuya was in Grape Hills Hospital[4] demonstrates its great range. It is also able to throw a brief punching barrage."
    },
    "Sky High": {
        image: "sf_stand.png",
        stats: "sf_stats.png",
        link: "https://www.youtube.com/watch?v=muLcm3_JSR4",
        power: "Super Fly's defining ability is that it imprisons one occupant inside it. It is mentioned that the energy of the sole prisoner is how it sustains itself. Toyohiro is the first prisoner of the tower and cannot leave until someone else steps in it. If that happens, the first of the two to exit the tower is free to leave while the other one must stay inside. Leaving the tower only requires not standing inside the structure, thus Toyohiro could hang on the side of Super Fly while Josuke was trapped. If the victim attempts to escape it, they will be covered in steel to restrict their movements. It is possible the victim could be perpetually covered if they do not pull themselves back in time and Toyohiro claims that any would-be escapee will be absorbed into the tower."
    },
    "Underworld": {
        image: "ewf_stand.png",
        stats: "ewf_stats.png",
        link: "https://www.youtube.com/watch?v=131OjWrdYwc",
        power: "Earth Wind and Fire allows Mikitaka to transform into any object. When transforming, Mikitaka decomposes himself into a cluster of strips of an unidentified substance before recomposing himself into an object of his choosing, replicating its appearance, weight, and texture. He is also able to split himself mid-transformation so as to form several objects, such as splitting himself in two to become a pair of sneakers. When transformed into an object, he also takes on the properties of the object. For example, morphing his hand into an ice cream cone will make it cold, and morphing himself into a pair of binoculars enables him to observe things from afar. He can also partially undo the transformation."
    },
    "Whitesnake": {
        image: "ct_stand.png",
        stats: "ct_stats.png",
        link: "https://www.youtube.com/watch?v=2u6uXuT9pm4",
        power: "Cheap Trick's signature ability is to attach itself to its user's back, beginning with its original user Masazo Kinoto. Cheap Trick then actively and relentlessly seeks to make someone else look at the current user's back, being especially dangerous when the host is asleep because it can then act unnoticed. If someone does look at the current user's back, Cheap Trick detaches from the host, killing them in the process, and attaches itself to the looker's back, beginning its process anew. When Cheap Trick transfers to a new host, the previous one is reduced to a dried-up doll-sized version of themselves as a result of Cheap Trick sucking out their life force upon detachment."
    },
    "C-moon": {
        image: "enigma_stand.png",
        stats: "enigma_stats.png",
        link: "https://www.youtube.com/watch?v=x4maoo4A3x4",
        power: "Enigma is able to transform objects and people, including the user, into pieces of paper.[2] Once transformed, the paper must be kept folded to keep the target transformed. If the paper is unfolded, the trapped object or person is released. Anyone can unfold the paper and release the trapped target. The condition of the object or person trapped in the paper remains the same as long as the paper is kept in one piece, but damaging the piece of paper results in an equivalent amount of damage on said object or person. For simple objects and animals, Enigma can simply apply its ability. However, to trap a person in paper, the user must discover the habits the target displays when afraid.[3] Once he has witnessed them display their habit enough to be 100% sure it's their tell, the Stand can capture the target the next time they display their tell. When its ability is activated, part of the object is literally transformed into paper and the rest of it is slowly but inexorably absorbed."
    },
    "Made In Heaven": {
        image: "kq_stand.png",
        stats: "kq_stats.png",
        link: "https://www.youtube.com/watch?v=cBMXQrW3VNA",
        power: "Killer Queen may charge any object, inanimate or not, as a bomb simply by touching it. Once a target has touched the object, Killer Queen can detonate the target by pressing its right thumb onto a trigger located on its index fingers middle phalanx, imitating the action of pressing down on a handheld detonator. If someone else touches the charged target before Kira can detonate it, they will automatically be blown up instead, consuming the charge. This can also be done through direct contact with Killer Queen or Kira himself, skipping the charging process.It seems that the explosion, while it doesn't harm the environment, does cause damage to people nearby (to a weaker extent), as seen in the case of Shigechi being hurt at point blank range, but not outright killed. This is also seen when Kira detonates one of Stray Cats air bullets, harming Josuke, but not blowing him up outright. The trigger for the explosion does not blow up"
    },
};