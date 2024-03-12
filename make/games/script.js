var data = [
	"https://itch.io/embed/1647979"
]

for (let i = 0; i < data.length; i++) {
  console.log(data[i])

	document.getElementById("games").innerHTML += " <iframe frameborder=\"0\" src=\"" + data[i] + "?dark=true\" width=\"552\" height=\"167\"></iframe>"
}