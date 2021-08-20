const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function getHumanReadable(rawdate) {
	const date = new Date(rawdate)
	return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`
}
