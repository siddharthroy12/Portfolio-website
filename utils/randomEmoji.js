export default function randomEmoji() {
	const emojiList = [
		'(* ^ ω ^)',
		'(o^▽^o)',
		'ヽ(・∀・)ﾉ',
		'٩(◕‿◕｡)۶',
		'	(〃＾▽＾〃)',
		'(╥﹏╥)',
		'☆⌒(> _ <)',
		'Σ(O_O)',
		'( ˘▽˘)っ♨',
		'ヾ(⌐■_■)ノ♪',
		'／(￣▽￣)／'
	]

	return emojiList[Math.floor(Math.random() *emojiList.length)]
}