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
      certifications: {
        Row: {
          course: string
          created_at: string
          id: string
          image: string
          issued_on: string
          issuer: string
          verify_url: string
        }
        Insert: {
          course: string
          created_at?: string
          id?: string
          image: string
          issued_on: string
          issuer: string
          verify_url: string
        }
        Update: {
          course?: string
          created_at?: string
          id?: string
          image?: string
          issued_on?: string
          issuer?: string
          verify_url?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          deploy_url: string | null
          description: string
          id: string
          image: string
          repository: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          created_at?: string
          deploy_url?: string | null
          description: string
          id?: string
          image: string
          repository?: string | null
          tags?: string[] | null
          title: string
        }
        Update: {
          created_at?: string
          deploy_url?: string | null
          description?: string
          id?: string
          image?: string
          repository?: string | null
          tags?: string[] | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_repository_fkey"
            columns: ["repository"]
            referencedRelation: "repositories"
            referencedColumns: ["id"]
          }
        ]
      }
      repositories: {
        Row: {
          created_at: string
          id: string
          owner: string
          repositoryName: string
        }
        Insert: {
          created_at?: string
          id?: string
          owner: string
          repositoryName: string
        }
        Update: {
          created_at?: string
          id?: string
          owner?: string
          repositoryName?: string
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
