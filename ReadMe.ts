
type Role = "ADMIN" | "USER" | null;

type NonNullableRole = NonNullable<Role>;


class User {

    type: string;

    constructor(type: NonNullableRole = 'USER'){
        this.type = type;
    }
}

// update