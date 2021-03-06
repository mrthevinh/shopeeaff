// src/routes/posts.ts
    
import type { EndpointOutput } from '@sveltejs/kit';
    
export async function get(): Promise<EndpointOutput> {
    const res = await fetch('http://localhost:8008/shopeevn/?skip=0&limit=20');
    const data = await res.json();
    return { body: data };
}