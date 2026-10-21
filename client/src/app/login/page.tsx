"use client";

import { baseUrl, postAndPatchReq } from "@/services/apiService";
import { useState } from "react";

export default function LoginPage(){
    const [loginData, setLoginData] = useState({
        email: "",
        password:""
    });
    const [isPassword, setIsPassword] = useState(false);
    const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(loginData);
        const response = await postAndPatchReq(`${baseUrl}/login` , "POST" , loginData);
        console.log(response);
    }
    return(
        <main className="min-h-screen bg-base-200 flex items-center justify-center p-4 sm:p-8">
            <div className="grid w-full max-w-5xl overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-xl lg:grid-cols-2">
                <section className="relative flex flex-col justify-between overflow-hidden bg-sky-50 p-8 sm:p-12">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl font-bold text-white">
                                F
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-slate-900">
                                FinOps
                            </span>
                        </div>
                        <p className="mt-3 text-sm font-medium text-slate-500">
                            Smarter Finance. Better Decisions.
                        </p>
                        <h1 className="mt-12 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                            Track. Manage.
                            <br />
                            Grow.
                        </h1>
                        <p className="mt-5 max-w-sm leading-7 text-slate-600">
                            Simplify your company&apos;s finance operations with
                            clear insights, smarter tracking, and better control.
                        </p>
                        <div className="mt-9 space-y-6">
                            {
                                [
                                    {
                                    icon: "↗",
                                    title: "Payables & Receivables",
                                    description: "Know what is owed and what is due.",
                                    },
                                    {
                                    icon: "▥",
                                    title: "Financial Insights",
                                    description: "Make better decisions with your data.",
                                    },
                                    {
                                    icon: "✓",
                                    title: "Secure & Internal",
                                    description: "Built for your company's team.",
                                    },
                                ].map((item)=>(
                                    <div key={item.title} className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl font-bold text-emerald-700">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h2 className="font-semibold text-slate-800">
                                                {item.title}
                                            </h2>
                                            <p className="mt-1 text-sm text-slate-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl" />
                </section>

                <section className="flex items-center justify-center p-8 sm:p-12 lg:p-14">
                    <div className="w-full max-w-md">
                        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
                            Welcome back
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-base-content">
                            Sign in to FinOps
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-base-content/60">
                            Access your finance operations dashboard.
                        </p>
                        <form className="mt-9 space-y-6" onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label htmlFor="email" className="label font-medium">
                                    Email / Username
                                </label>
                                <input 
                                type="text" 
                                id="email"
                                name="email"
                                autoComplete="username"
                                placeholder="userOne@internal.com"
                                value={loginData.email}
                                onChange={(e)=>setLoginData({...loginData, email: e.target.value})}
                                className="input input-bordered h-12 w-full rounded-xl" 
                                required/>
                            </fieldset>
                            <fieldset className="fieldset">
                                <label htmlFor="password" className="label font-medium">
                                    Password
                                </label>
                                <div className="relative">
                                    <input 
                                    type={isPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={(e)=>setLoginData({...loginData, password: e.target.value})}
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    className="input input-bordered h-12 w-full rounded-xl pr-20" 
                                    required/>
                                    <button 
                                    type="button" 
                                    className="btn btn-ghost btn-sm absolute right-1 top-1/2 -translate-y-1/2"
                                    aria-label={isPassword ? "Hide password" : "Show password"}
                                    onClick={()=>setIsPassword(!isPassword)}>
                                        {isPassword ? "Hide" : "Show"}
                                    </button>
                                </div>
                            </fieldset>
                            <div className="flex items-center justify-between gap-3">
                                <label className="flex cursor-pointer items-center gap-2 text-sm text-base-content/70">
                                    <input type="checkbox" className="checkbox checkbox-sm checkbox-success" />
                                    Remember me
                                </label>
                                <span className="text-sm text-base-content/50">
                                    Internal access
                                </span>
                            </div>
                            <button type="submit" className="btn h-12 w-full rounded-xl border-0 bg-emerald-700 text-base font-semibold text-white shadow-md hover:bg-emerald-800">
                                Login <span aria-hidden="true">→</span>
                            </button>
                        </form>
                        <div className="divider my-7 text-xs text-base-content/40">
                            SECURE INTERNAL ACCESS
                        </div>
                        <p className="text-center text-xs leading-5 text-base-content/50">
                            Authorized company employees only.
                            <br />
                            Contact your administrator if you need access.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}