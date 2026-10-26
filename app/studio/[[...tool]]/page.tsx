import { isSanityConfigured } from "@/sanity/env"

export const dynamic = "force-static"

export { metadata, viewport } from "next-sanity/studio"

export default async function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-xl px-6 py-24">
          <h1 className="text-3xl font-bold">Connect Sanity</h1>
          <p className="mt-4 text-muted-foreground">
            Add your project id to <code>.env.local</code>, then restart the
            dev server.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-lg bg-card p-4 text-sm">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production`}
          </pre>
          <p className="mt-6 text-muted-foreground">
            Create a project with <code>npx sanity@latest init</code> if you
            do not have one yet. The public site keeps its current layout
            until content is published.
          </p>
        </div>
      </main>
    )
  }

  const { Studio } = await import("./studio")
  return <Studio />
}
