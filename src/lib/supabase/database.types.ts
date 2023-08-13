export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          created_at: string
          id: string
          name: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          url: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          url?: string
        }
        Relationships: []
      }
      repositories: {
        Row: {
          created_at: string
          id: string
          owner: string
          repositoryName: string
          with_commits: boolean
        }
        Insert: {
          created_at?: string
          id?: string
          owner: string
          repositoryName: string
          with_commits?: boolean
        }
        Update: {
          created_at?: string
          id?: string
          owner?: string
          repositoryName?: string
          with_commits?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
