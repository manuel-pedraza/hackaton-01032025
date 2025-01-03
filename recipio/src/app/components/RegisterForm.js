"use client";

import { useActionState } from "react";
import { register } from "../../actions/profileController";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
    const [formState, formAction] = useActionState(register, {});

    if (formState.success)
        redirect("/");

    return (
        <div >
            {/* // TODO: Validation indicators */}
            <form action={formAction}>
                <div>
                    <label>Name</label>
                    <input name="username" type="text" placeholder="Username" />
                </div>

                <div>
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" />
                </div>
                <div>
                    <Link href="/log-in">Log in with an existing account</Link>
                </div>
                <button>Create Account</button>
            </form>
        </div>
    );
}