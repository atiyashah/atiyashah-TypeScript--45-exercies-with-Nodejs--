/*15. Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.*/
var guestList = ["Atiya", "sunaina", "Ayesha", "Areeba"];
var dontCome = guestList[0];
console.log(dontCome, "Can not make it, for dinner");
guestList.splice(0, 1, "Fariha");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", You are corodially invited to a dinner")); });
