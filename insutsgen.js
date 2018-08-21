<script>
//create an array of adjectives or adverbs
var adjectives = ["weird", "nice","hyper","tired"];
//askthe person for his or her name
var name = prompt("what is your name?");
//generate a random number
var x = Math.floor(Math.random() * adjectives.length);
//let the user know what kind of per are
window.alert(name + " " + "is a"+ " " + adjectives[x] + " " + "person");
</script>