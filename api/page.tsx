import { MenuItem } from "@/interfaces/IMenu";
import { IPage } from "@/interfaces/IPage";


// API-запрос + динамический адрес (alias)
export async function getPage(alias: string): Promise<IPage | undefined> {
	const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/byAlias/' + alias, {
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

export async function requestDelay(delay: number): Promise<any> {
	const res = new Promise((response, reject) => {
		setTimeout(() => response(true), delay);
	});

	let result = await res;
	return result;
}