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
      contacts: {
        Row: {
          email: string
          email_sent: boolean
          from: string
          id: string
          message: string
          submitted_at: string
        }
        Insert: {
          email: string
          email_sent?: boolean
          from: string
          id?: string
          message: string
          submitted_at?: string
        }
        Update: {
          email?: string
          email_sent?: boolean
          from?: string
          id?: string
          message?: string
          submitted_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          deploy_url: string | null
          description: string
          id: string
          imagePath: string
          repository: string | null
          tags: string[] | null
          title: string
        }
        Insert: {
          created_at?: string
          deploy_url?: string | null
          description: string
          id?: string
          imagePath: string
          repository?: string | null
          tags?: string[] | null
          title: string
        }
        Update: {
          created_at?: string
          deploy_url?: string | null
          description?: string
          id?: string
          imagePath?: string
          repository?: string | null
          tags?: string[] | null
          title?: string
        }
        Relationships: []
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
