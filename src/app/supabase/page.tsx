
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)

    const { data: todos } = await supabase.from('todos').select()

    return (
        <ul>
            {todos?.map((todo) => (
                // eslint-disable-next-line react/jsx-key
                <li>{todo}</li>
            ))}
        </ul>
    )
}
