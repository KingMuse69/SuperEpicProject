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
        power: "After the User and a potential victim bet on something and the victim loses, Marilyn Manson comes to collect the wager or anything equivalent. Like Osiris and Atum, Marilyn Manson activates after Miraschon or even itself makes a bet with someone. If the person with whom Miraschon bets with loses, Marilyn Manson materializes near them and proceeds to take from them any possession of value in order to pay up. Money directly flies into Marilyn Manson's hooks, but it can also mutilate the victim to take valuable body parts to sell to the black market, like gold teeth or their liver. It thinks by itself of what to collect in order to have the equivalent of the wager but refuses to collect anything that doesn't rightfully belong to the victim like stolen money, knowing this thanks to its ability to read the victim's mind. Marilyn Manson claims that it is merely the shadow within the loser's heart, who has recognized even slightly their loss, and therefore it cannot be attacked either by the loser or any ally. Hits simply phase through Marilyn Manson. It has been described in its stats as the victim acknowledging their fault and being unconsciously unable to defend themselves against what they recognize as a legitimate debt collection. Likewise, Marilyn Manson can overpower a Stand User who thinks of attacking Miraschon directly."
    },
    "Jumpin Jack Flash": {
        image: "jjf_stand.png",
        stats: "jjf_stats.png",
        link: "https://www.youtube.com/watch?v=G3dFpQzu54w",
        power: "If Lang Rangler spits on someone, the victim becomes the center of a zero-gravity environment. Being spat on by Lang Rangler causes the victim to stop being subject to gravity as well as anything or anyone they touch. The sudden loss of gravity is crippling for the victims who are guaranteed to be disoriented. However, the most dangerous property of Jumpin' Jack Flash is that its power creates a chain reaction that causes the air in the nearby vicinity to become weightless. It eventually creates a vacuum of about 20 meters around the victim[4] that threatens to suck away their blood from any wound and eventually causes the boiling of the bloodstream long before suffocation sets in. In the vacuum, anything containing air becomes a potential explosive, which Lang uses to his advantage to propel shrapnel of various objects into his enemies.[6] This vacuum is dangerous both for the victims and Lang, who must stay away from the victim or they will be injured as well"
    },
    "Limp Bizkit": {
        image: "lb_stand.png",
        stats: "lb_stats.png",
        link: "https://www.youtube.com/watch?v=ZpUYjpKg9KY",
        power: "Limp Bizkit enables Sports Maxx to bring the dead back to life as invisible zombies. When Sports Maxx activates Limp Bizkit, all corpses nearby generate invisible wraiths, including Sports Maxx himself should he die. These corpses manifest as tangible yet invisible spirits that climb out of their corporeal bodies and attack anyone nearby upon Maxx's command. The ability works on anything considered deceased and regardless of the species or the date of death, as a stuffed bird and alligator used for taxidermy and recent deceased prisoners alike were affected and attacked the Joestar Group. Sports Maxx seems to be able to revive even body parts, as he did with DIO's Bone. As an added bonus, the zombies all have enhanced strength, the ability to walk on walls and permanent invisibility. However, they can be killed a second time through conventional attacks. When a zombie is attacked, its original body receives the damage. According to Sports Maxx, the wraiths suffer an intense craving for blood and brains, explaining their aggressiveness."
    },
    "Survivor": {
        image: "survivor_stand.png",
        stats: "survivor_stats.png",
        link: "https://www.youtube.com/watch?v=btPJPFnesV4",
        power: "Survivor dramatically exacerbates the aggressiveness of those under its spell. Described by DIO as the weakest Stand, Survivor travels across wet surfaces and stimulates the human limbic system with a tiny electric potential of 0.07 Volts and an otherwise negligible current, which is stated to increase an individual's anger or fighting spirit. Any feeling of aggressiveness will be greatly multiplied to the point those affected by Survivor will fight each other with reckless abandon. For instance, Sonny Likir, a prison guard punched his comrade so hard he not only tore away part of Westwood's flesh, but also exposed his knuckles due to the intensity of the punch. Afterward, the victims may even actively seek confrontation regardless of the consequence, such as a prison guard releasing all the prisoners of the isolation ward to fight them. Since Guccio's own ability to make other people fight matches his Stand, he remains unaffected by it."
    },
    "Planet Waves": {
        image: "pw_stand.png",
        stats: "pw_stats.png",
        link: "https://www.youtube.com/watch?v=Frj2CLGldC4",
        power: "Planet Waves draws distant meteoroids toward its user, colliding with any person or object within their vicinity. It attracts small rocks from space, which then fall to Earth precisely toward the user with enough speed that they can tear off chunks of the body and cannot be heard until impact. Moreover, the meteoroids heat up to 3000 °C during their entry, increasing their lethality. The meteors appear in a time span of anywhere from minutes to seconds between each meteor"
    },
    "Dragons Dream": {
        image: "dragonsdream_stand.png",
        stats: "dragonsdream_stats.png",
        link: "https://www.youtube.com/watch?v=nPqc0vrtsaw",
        power: "Dragon's Dream is an unusual Stand in that it is functionally neutral during a fight and cannot attack, leaving Kenzou the responsibility of defeating the enemy personally. However, as Kenzou knows how to use the Feng Shui power of Dragon's Dream to the fullest, the old man still possesses a tremendous advantage. Dragon's Dream allows Kenzou to usually finish off his opponents in one strike, and only the resilience of Foo Fighters combined with Anasui's timely intervention could defeat him."
    },
    "Yo-Yo Ma": {
        image: "yoyoma_stand.png",
        stats: "yoyoma_stats.png",
        link: "https://www.youtube.com/watch?v=1prweT95Mo0",
        power: "Yo-Yo Ma is an Automatic Stand characterized by its high range, autonomy, and resilience, allowing D an G to sic it on Jolyne Cujoh and wait from afar until Yo-Yo Ma kills her with its acid. Yo-Yo Ma is shown to be near indestructible, taking 6 shots from a pistol, getting punched multiple times by Stone Free without taking any damage and wasn't even killed when disabled by Narciso Anasui with the user instead being beaten. Unlike most automatic Stands, Yo-Yo Ma possesses a high degree of intellect. It knows a fair deal about survival in the swamps, how to pilot a hovercraft, and how to craft miscellaneous useless items out of junk like a chair out of twigs. The only instructions it receives are general goals to achieve such as killing Jolyne and retrieving the Green Baby. It is then free to act as it pleases and will dispose of any person in its way"
    },
    "Green Green Grass of Home": {
        image: "g3oh_stand.png",
        stats: "g3oh_stats.png",
        link: "https://www.youtube.com/watch?v=EmT1ptv3VEc",
        power: "Green, Green Grass of Home causes everything around the Green Baby to shrink the closer they are to it. Beginning at an undisclosed distance from the Green Baby, anything, be they objects or people, is reduced in size proportionally to their proximity to the Baby. If someone halves the distance their size is halved as well. As such, it's impossible to actually reach the Green Baby. If someone moves away from the child, they will grow back appropriately. Should a person get close enough to the vanishing point, at a point close to the child, Green, Green Grass of Home will manifest itself and attack them. Although it can force its victim onto the Green Baby, supposedly attempting to wipe the person from existence as they vanish into an infinitely small size, it can eventually resort to killing target through more conventional means, such as using its towering size compared to the shrunken victim to crush them"
    },
    "Jail House Lock": {
        image: "jhl_stand.png",
        stats: "jhl_stats.png",
        link: "https://www.youtube.com/watch?v=PpsUOOfb-vE",
        power: "Jail House Lock is triggered if someone or their Stand touches the bars or walls beyond the visiting room of Green Dolphin Street Prison, or if Miu Miu sics it on someone. Although they retain all their memories from before the instant it is activated, the victim is now only able to process and remember three new memories and when they learn a fourth thing, they will forget the first thing they've learned and so on. Several people, up to at least several dozens, can be affected at once. The power is extremely crippling as the victim find themselves distracted by a flow of new information, forgetting to perform any important task like finding Miu Miu to defeat her. Miu Miu herself claims that the continual memory loss eventually destroys its victim's ability to think. Miu Miu also exploits the memory loss to her advantage by distracting her enemies with many information so they completely forget about the actual attack."
    },
    "Bohemian Rhapsody": {
        image: "br_stand.png",
        stats: "br_stats.png",
        link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
        power: "Bohemian Rhapsody is able to bring fictional characters depicted in images into reality through media containing them. Cartoon and anime characters, even works of art and drawings are affected. When one meets a character they like, their souls are dragged into the character's role, taking the appearance and the fate of the character because, as Pinocchio claims, they secretly wish to be able to live their fantasies. The soul and the body of the victim now act independently, as if the person was split; moreover the separation is immediate and almost unnoticeable to the victim. The soul is visible to only other souls and only the soul can use the person's Stand. Although some can be dragged into a happy story, it is especially dangerous to be dragged into a story where the character dies. The characters are made of the same material they came from, and thus cannot easily be destroyed; shown when the mother goat is simply folded into paper when punched. There is no way to change the course of the story one find themselves in as they are already written. Running away or hiding from the characters is useless as objects will simply unfold like paper that enable the characters to walk through or even teleport. Destroying the fictional character that brought a victim into a story is the only way to return the soul back into the body. The images of characters destroyed in reality don't return to the books and papers they were featured. The only example shown in the manga is after Pinocchio was killed by Narciso Anasui."
    },
    "Sky High": {
        image: "skyhigh_stand.png",
        stats: "skyhigh_stats.png",
        link: "https://www.youtube.com/watch?v=k4FMNPFy6Fw",
        power: "Sky High's only power is to control and direct the rods.(Also called skyfish, rods are obscured transparent rod-like creatures that do not belong to any known family of species and live in remote locations, thus their very existence could never be fully proven.) However, the exact mechanism of that control is not disclosed and is theorized as a trust relationship. Rikiel exploits the rod's habit of sucking heat to rapidly and locally decrease the temperature of a selected body part from afar. When concentrated in one spot, the rapid decrease in heat can cause body parts and internal organs to become prone to disease and failure. The closer Rikiel is, the more accurately he can direct the rods, but he has enough control and range to target the eyelids of a flying helicopter's occupants. Rikiel needs to concentrate to properly control the rods, and their effects can even backfire on him if he loses his cool. If he panics, Sky High unwillingly orders all nearby rods to stay still. This ability of creating diseases enables him to cripple his enemies in various way but also enhance his own abilities."
    },
    "Underworld": {
        image: "underworld_stand.png",
        stats: "underworld_stats.png",
        link: "https://www.youtube.com/watch?v=15Q_T5cz02g",
        power: "Under World is able to excavate memories of events and people from the earth. Acting on the assumption that the ground has a memory of everything that happens upon it, Under World can summon any past event that has happened in Orlando, Florida, with no limitation to its date of occurrence and scope, by digging through the soil and uncovering the underground. The memories include car crashes, shootings, plane crashes, NFL football games, minerals, and even individuals. To assist it, Versus is also granted the knowledge of everything that has happened in the past. If Under World cannot do the motion of digging up the ground, then it is unable to summon memories. The memories of individuals are somehow aware of their status yet do not mind it, one stewardess calmly informing Jolyne of her plane's impending crash. These memories are also composed of the earth and can be seen by non-Stand users."
    },
    "Whitesnake": {
        image: "whitesnake_stand.png",
        stats: "whitesnake_stats.png",
        link: "https://www.youtube.com/watch?v=ABAVvYqDtDE",
        power: "Whitesnake's primary ability is to manipulate spirits through the use of special DISCs. Whitesnake can first and foremost extract a portion or the entirety of a person's psyche out of their bodies in the form of tangible DISCs and then put them into people. To do so, Whitesnake must touch its victim and take the time to physically extract the DISC from them; as such, partial extraction is ineffective. There are two main types of DISCs: Memory DISCs contain a person's memory and Stand DISCs contain a person's Stand. DISCs may be inserted into another person's head, allowing them to either freely consult the memories inside or use the corresponding Stand, much like the original user. Pucci can use this mechanic to force a detrimental power into someone, for example putting a water-boiling Stand DISC inside Foo Fighters, who was highly dependent on water to survive. In certain instances, those with inserted DISCs can eject them, presumably through enough force to the head. Whitesnake has also demonstrated the ability to directly manipulate someone and their mind by non-lethally stabbing their head with its hand, the affected individual will be brainwashed, unhesitatingly obeying Pucci's every command so long as Whitesnake's hand remains plunged into their head"
    },
    "C-moon": {
        image: "cmoon_stand.png",
        stats: "cmoon_stats.png",
        link: "https://www.youtube.com/watch?v=Uf0AnY9D9gw",
        power: "C-MOON makes Enrico Pucci the center of a reverse gravitational phenomenon. Within a radius of 3 kilometers around Pucci, the gravity shifts so that people and objects are repelled from Pucci. Thus, any unfixed object will fall away from him as if the Earth was a giant cliff but then return to normal once they fall sufficiently away from Pucci. Likewise, anyone positioned above Pucci will fall upward. C-MOON itself is unaffected and can freely move around Pucci. By default, Pucci's gravity always makes him attracted to the surface below his feet, making him able to walk on any surface, even vertical ones. However, he can toggle the gravity shift so he can levitate freely instead. C-MOON can also dramatically modify the gravitational force acting upon an object by touching it with its fists, which is expressed by that object turning inside-out. Anything its fists even graze will be affected, down to individual hairs. If C-MOON touches the same object or area twice, the effects are reversed, enabling Jolyne to partially withstand its blows."
    },
    "Made In Heaven": {
        image: "mih_stand.png",
        stats: "mih_stats.png",
        link: "https://www.youtube.com/watch?v=171skzi5BKc",
        power: "Made in Heaven's power is to dramatically speed up the flow of time; achieved through its ability to control the gravitational forces of the earth, moon, and seemingly the entire universe (in reference to aspects of Einstein's theory of relativity. Upon activation, time will gradually flow faster and faster in the whole universe. However, Made in Heaven prevents any living being from being affected by the acceleration, with the exception of its user, Enrico Pucci. The lag between people's perceptions and the actual flow of time causes everyone to see all events not directly caused by action as being sped up, which is considerably dangerous in case one is in a vehicle or in dangerous environments. People in a cold environment seem to freeze instantly, all phenomenon like melting, flowing, drying, movements of objects will accelerate to the point people cannot react; the sun eventually seems to rotate at high-speed in the sky, objects and corpses seem to decay in seconds, one can even witness the erosion of the water on rocks. Interestingly, Made in Heaven can't accelerate certain Stand abilities such as Kiss or reduce the window of its action. Meanwhile, Pucci himself appears to possess extraordinary speed and reaction time, and effortlessly out speeds any of his opponents, Star Platinum included. Because of this great advantage, he can freely approach and use Made in Heaven to inflict mortal wounds like slitting the throat. He does, however, retain all of his human weaknesses: running or swimming around will tire him, while being exposed to a hazardous environment, like a room with a high concentration of oxygen, will endanger him noticeably faster than his opponents. As time continues to accelerate, the universe will hit a vanishing point, where the current universe is erased and a new universe will be created where everything repeats itself. All events in the new universe occur according to fate."
    },
};