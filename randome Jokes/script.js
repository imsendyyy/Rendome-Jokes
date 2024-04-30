





let jokearry = [` Why don't sheep trust each other? Because each one has a baaaad history of pulling the wool over their eyes.`,

` What did the dolphin say when he was confused? "Can someone please explain this to me? I'm feeling totally out of my depth here!"`,

` Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels, and they can't handle the cream cheese.`,

` What happens when a frog's car dies? He needs a jump. If that doesn't work, he has to get it toad.`,

` Why did the tomato turn red? Because it saw the salad dressing and the lettuce leaf!`,

` Why don't oysters share their pearls? Because they're a little shellfish when it comes to their personal treasures.`,

` What do you call a cow spying on another cow? A steak out. They're gathering intel for the next barbecue.`,

` How does a penguin build its house? Igloos it together, one icy block at a time, hoping for a warm neighbor.`,

` Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field, brainy but never corny.`,

` What do you get when you cross a snowman and a vampire? Frostbite, and a very confused weather forecast.`,

` Why did the crab never go to college? Because he was already a little shell-tered and thought he knew everything about the sea.`,

` What do you call a bear with no ears? B, because without ears, it can't hear the rest of its name.`,

` Why did the octopus beat the shark in a fight? Because it was well-armed and ready for any wave of attack.`,

` What did the elephant say to the naked man? "It's cute, but can you breathe through it like I do with my trunk?"`,

` Why do cows have hooves instead of feet? Because they lactose (lack toes), and it makes hoofing around the field easier.`,

` Why was the math book sad? Because it had too many problems, and even the owls couldn't solve them by hooting.`,

` Why did the gum cross the road? Because it was stuck to the chicken's foot, pondering the mysteries of life and poultry.`,

` Why don't skeletons fight each other? They don't have the guts for it, even if the crows tried coaching them.`,

` What do you call an illegally parked frog? Toad. And it wasn't even hopping mad about it, just ribbitingly annoyed.`,

` Why do fish live in saltwater? Because pepper makes them sneeze, and nobody wants to see a fishbowl full of tissues.`,

` What did the janitor say when he jumped out of the closet? "Supplies!" The mice were the most surprised, and the cats just rolled their eyes.`,

` What do you call a cow with two legs? Lean beef. If it had no legs, would you call it ground beef or a milkshake on the run?`,

` Why did the chicken join a band? Because it had the drumsticks, and the guitar was too big for its wings.`,

` What do you call a pile of cats? A meowtain, climbing it can be a purrfectly fur-midable challenge.`,

` Why did the duck say "quack"? Because it couldn't say "moo," and it was definitely not going to start barking now.`]


document.getElementById("changeJoketBtn").addEventListener("click", () =>{
    let randomindex = Math.floor( Math.random() * jokearry.length);
    document.getElementById("Items").innerHTML = ( jokearry[randomindex] );

    document.getElementById("Items").classList.toggle("lineUp");
})

