import { act, fireEvent, render, screen } from "@testing-library/react"
import { UsersList } from '../../users/components/UsersList'

describe('UsersList', () => {
    const setup = () => {
        const users = [
            {
                name: "asd asd",
                id: "123",
                email: "temai@dwad.dwa",
                password: "pa55word",
            },
            {
                id: "471090812",
                name: "asdsadsa",
                email: "tre@tre.te",
                password: "asdasd123"
            }
        ]
        render(<UsersList users={users} />)
        return users
    }

    test('shows list of users', () => {
        const users = setup()
        expect(screen.queryAllByRole('cell')).toHaveLength(users.length * 3)
    })

    test('shows button for tasks', () => {
        const users = setup()
        expect(screen.queryAllByRole('button')).toHaveLength(users.length)
    })
})


