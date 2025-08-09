const fetchUrl = async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    const json = await response.json();

    return json as T
}

export default fetchUrl;