

// API-запрос + динамический адрес (alias)
export default async function getPage(alias: string) {
	const res = await fetch('https://courses-top.ru/api/' + alias, {
        // ревалидация (регенерация через запрос)
        next: { revalidate: 10 },
		method: 'GET',
	})
    if(!res.ok) return;

	return res.json();
}