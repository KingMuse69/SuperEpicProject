const standData = {
    "Crazy Diamond": {
        image: "cd_stand.png",
        stats: "cd_stats.png",
        link: "https://www.youtube.com/watch?v=cWGE9Gi0bB0",
        power: "Crazy Diamond's unique ability is to restore objects or organisms through touch. It can repair the damage, heal injuries, revert chemical changes and complex structures to their raw components (e.g. a plate of spaghetti back into its raw ingredients). It may also fuse objects, for example, a person with a rock (as with villain Anjuro Katagiri). When restoring a divided object, the user is able to control which part acts as the starting points for the rest to gather towards. Feats of this nature include trapping an enemy by restoring pieces of a broken crate around him; exposing a Stand formerly bound to an object; and tracking by restoring a severed hand, forcing it to seek out and reattach itself to the body from which it was cut off."
    },
    "The Hand": {
        image: "hand_stand.png",
        stats: "hand_stats.png",
        link: "https://www.youtube.com/watch?v=FFqb1I-hiHE",
        video: "https://www.youtube.com/embed/FFqb1I-hiHE?si=haib8gkF3jKRaGNX",
        power: "Anything The Hand's right palm touches when it does a swiping motion with its arm is erased from this universe, be it physical matters or space itself. Okuyasu states that not even he knows where the voided objects go. Objects that are subjected to the ability appear as if an extremely sharp blade had sliced clean through them. Whenever The Hand erases something, the resulting voided space is unable to sustain itself, and reality will immediately be filled and 'stitched up' by adjacent space and objects, effectively removing any traces of the removed object's existence. When Okuyasu used this ability on the middle of a sign that read 'NO TRESPASSING', the sign was changed to read 'NO PASSING'."
    },
    "Heavens Door": {
        image: "hd_stand.png",
        stats: "hd_stats.png",
        link: "https://www.youtube.com/watch?v=k04tX2fvh0o",
        video: "https://www.youtube.com/embed/gXVGZv9Ya6w?si=w-M6KHWWDlFWBoA9",
        power: "Heaven's Door's basic ability is to turn people into books, pages unfurling from their bodies in the shape of whatever body part it opens from (for example, if from the face, the shape of the pages is of the person's entire face, eye holes included). Targets may be incapacitated to varying degrees while under this effect, from barely being able to walk to being completely knocked out. The contents of the books contain detailed and absolutely true information on their subject, including physical characteristics, personality, and all of their memories and thoughts from their earliest to their latest. The pages also include details on the victim's Stand, if they have one. Rohan was even able to use this ability on a chicken leg to determine its expiration date. However, Rohan cannot read his own memories, nor can Heaven's Door reveal any information and memories that his target knows about him."
    }
};

function navigateTo(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function loadStand(name) {
    const s = standData[name];
    document.getElementById('stand-name').innerText = name;
    document.getElementById('stand-img').src = s.image;
    document.getElementById('stand-stats').src = s.stats;
    // document.getElementById('stand-ref').href = s.link;
    document.getElementById('stand-power').innerText = s.power;
    if (s.video) {
        document.getElementById('stand-video').src = s.video;
        document.getElementById('stand-video').style.display = 'block';
        document.getElementById('stand-ref').style.display = 'none';
    } else {
        document.getElementById('stand-ref').href = s.link;
        document.getElementById('stand-ref').style.display = 'block';
        document.getElementById('stand-video').style.display = 'none';
    }
    navigateTo('stand-profile');
}