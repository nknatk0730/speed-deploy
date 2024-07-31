'use client'

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { createProfile } from "@/actions/profile"

export default function Page() {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().min(2).max(400),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    return createProfile(values);
  }

  return (
    <div className="container py-6">
      <h1 className="font-bold text-3xl">Create Profile</h1>

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>profile</FormLabel>
              <FormControl>
                <Input autoComplete="off" placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create profile</Button>
      </form>
    </Form>
    </div>
  )
}
