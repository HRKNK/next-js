import { MenuItem } from "@/interfaces/IMenu";


// API-запрос + динамический адрес (alias)
export async function getPage(alias: string) {
	const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + alias, {
        // ревалидация (регенерация через запрос)
        next: { revalidate: 10 },
		method: 'GET',
	})
    if(!res.ok) return;

	return res.json();
}

export async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	// переменная окружения process.env
	const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {
		method: 'POST',
		body: JSON.stringify({
			firstCategory,
		}),
		headers: new Headers({'content-type': 'application/json'}),
	})
	return res.json();
}