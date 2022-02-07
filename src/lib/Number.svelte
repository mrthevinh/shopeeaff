<script lang="ts">
	export let number: number;
	export let locale: string = 'vi-VN';
	number = number / 10000;
	// $: formattedNumber = number.toLocaleString(locale, {
	//   notation: "compact",
	//   compactDisplay: "long",
	// });
	let formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: 'VND'
	});
	$: currency = formatter.format(number);
</script>

<span>{currency}</span>

<style>
	span {
		font-variant-numeric: tabular-nums;
	}
</style>
