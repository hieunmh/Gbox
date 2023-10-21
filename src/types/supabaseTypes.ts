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
      achievement_obtainers: {
        Row: {
          achievement_id: string | null
          id: string
          obtained_at: string
          profile_id: string | null
        }
        Insert: {
          achievement_id?: string | null
          id?: string
          obtained_at?: string
          profile_id?: string | null
        }
        Update: {
          achievement_id?: string | null
          id?: string
          obtained_at?: string
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "achievement_obtainers_achievement_id_fkey"
            columns: ["achievement_id"]
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          }
        ]
      }
      achievements: {
        Row: {
          created_at: string
          description: string | null
          game_id: string | null
          id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          game_id?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          game_id?: string | null
          id?: string
        }
        Relationships: []
      }
      appointments: {
        Row: {
          appoinment_date: string
          course_student_id: string
          id: string
          note: string | null
        }
        Insert: {
          appoinment_date: string
          course_student_id: string
          id?: string
          note?: string | null
        }
        Update: {
          appoinment_date?: string
          course_student_id?: string
          id?: string
          note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_course_student_id_fkey"
            columns: ["course_student_id"]
            referencedRelation: "course_students"
            referencedColumns: ["id"]
          }
        ]
      }
      comments: {
        Row: {
          created_at: string
          id: string
          image: string | null
          modified_at: string | null
          post_id: string
          reply_comment_id: string | null
          text: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          image?: string | null
          modified_at?: string | null
          post_id: string
          reply_comment_id?: string | null
          text?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          image?: string | null
          modified_at?: string | null
          post_id?: string
          reply_comment_id?: string | null
          text?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      course_students: {
        Row: {
          course_id: string | null
          created_at: string
          id: string
          joined_date: string | null
          user_id: string | null
        }
        Insert: {
          course_id?: string | null
          created_at?: string
          id?: string
          joined_date?: string | null
          user_id?: string | null
        }
        Update: {
          course_id?: string | null
          created_at?: string
          id?: string
          joined_date?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "course_students_course_id_fkey"
            columns: ["course_id"]
            referencedRelation: "courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_students_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      courses: {
        Row: {
          created_at: string
          description: string
          email_verified_date: string | null
          id: string
          price: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description: string
          email_verified_date?: string | null
          id?: string
          price: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          email_verified_date?: string | null
          id?: string
          price?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      demands: {
        Row: {
          created_at: string
          game_id: string | null
          id: string
          is_active: boolean | null
          nums_of_player: number | null
          room_id: string
        }
        Insert: {
          created_at?: string
          game_id?: string | null
          id?: string
          is_active?: boolean | null
          nums_of_player?: number | null
          room_id: string
        }
        Update: {
          created_at?: string
          game_id?: string | null
          id?: string
          is_active?: boolean | null
          nums_of_player?: number | null
          room_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "demands_room_id_fkey"
            columns: ["room_id"]
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          }
        ]
      }
      events: {
        Row: {
          game_id: string | null
          game_name: string | null
          id: string
          is_instance: boolean | null
          room_id: string | null
          start_date: string
          user_id: string | null
        }
        Insert: {
          game_id?: string | null
          game_name?: string | null
          id?: string
          is_instance?: boolean | null
          room_id?: string | null
          start_date?: string
          user_id?: string | null
        }
        Update: {
          game_id?: string | null
          game_name?: string | null
          id?: string
          is_instance?: boolean | null
          room_id?: string | null
          start_date?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_room_id_fkey"
            columns: ["room_id"]
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          receiver_id: string | null
          room_id: string | null
          sender_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          receiver_id?: string | null
          room_id?: string | null
          sender_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          receiver_id?: string | null
          room_id?: string | null
          sender_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_room_id_fkey"
            columns: ["room_id"]
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      notification_users: {
        Row: {
          created_at: string | null
          id: string
          notification_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          notification_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          notification_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notification_users_notification_id_fkey"
            columns: ["notification_id"]
            referencedRelation: "notifications"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      notifications: {
        Row: {
          content: string
          created_at: string
          id: string
          link_to: string | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          link_to?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          link_to?: string | null
        }
        Relationships: []
      }
      play_historys: {
        Row: {
          created_at: string
          demand_id: string | null
          end_date: string | null
          id: string | null
        }
        Insert: {
          created_at?: string
          demand_id?: string | null
          end_date?: string | null
          id?: string | null
        }
        Update: {
          created_at?: string
          demand_id?: string | null
          end_date?: string | null
          id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "play_historys_demand_id_fkey"
            columns: ["demand_id"]
            referencedRelation: "demands"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          content: string
          created_at: string
          event_id: string | null
          game_meta_data: Json | null
          game_name: string | null
          game_progress: string | null
          id: string
          media: Json | null
          newsURL: string | null
          title: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          event_id?: string | null
          game_meta_data?: Json | null
          game_name?: string | null
          game_progress?: string | null
          id: string
          media?: Json | null
          newsURL?: string | null
          title: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          event_id?: string | null
          game_meta_data?: Json | null
          game_name?: string | null
          game_progress?: string | null
          id?: string
          media?: Json | null
          newsURL?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar: string | null
          bio: string | null
          created_at: string
          dob: string | null
          gaming_platform: Json[] | null
          gender: string | null
          id: string
          location: string | null
          modified_at: string | null
          name: string | null
          play_time: Json[] | null
          role: string | null
        }
        Insert: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          dob?: string | null
          gaming_platform?: Json[] | null
          gender?: string | null
          id?: string
          location?: string | null
          modified_at?: string | null
          name?: string | null
          play_time?: Json[] | null
          role?: string | null
        }
        Update: {
          avatar?: string | null
          bio?: string | null
          created_at?: string
          dob?: string | null
          gaming_platform?: Json[] | null
          gender?: string | null
          id?: string
          location?: string | null
          modified_at?: string | null
          name?: string | null
          play_time?: Json[] | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      rate_for_lesson: {
        Row: {
          content: string | null
          created_at: string
          id: string
          score: number
        }
        Insert: {
          content?: string | null
          created_at?: string
          id: string
          score: number
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          score?: number
        }
        Relationships: [
          {
            foreignKeyName: "rate_for_lesson_id_fkey"
            columns: ["id"]
            referencedRelation: "course_students"
            referencedColumns: ["id"]
          }
        ]
      }
      rates: {
        Row: {
          content: string | null
          id: string | null
          modified_at: string | null
          score: number | null
          user_id: string
        }
        Insert: {
          content?: string | null
          id?: string | null
          modified_at?: string | null
          score?: number | null
          user_id: string
        }
        Update: {
          content?: string | null
          id?: string | null
          modified_at?: string | null
          score?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rates_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reactions: {
        Row: {
          comment_id: string | null
          id: string
          modified_at: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          comment_id?: string | null
          id?: string
          modified_at?: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Update: {
          comment_id?: string | null
          id?: string
          modified_at?: string
          post_id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reactions_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      room_users: {
        Row: {
          created_at: string
          id: string
          is_host: boolean | null
          joined_date: string | null
          outed_date: string | null
          room_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_host?: boolean | null
          joined_date?: string | null
          outed_date?: string | null
          room_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_host?: boolean | null
          joined_date?: string | null
          outed_date?: string | null
          room_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "room_users_room_id_fkey"
            columns: ["room_id"]
            referencedRelation: "rooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "room_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      rooms: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at?: string
          id?: string
        }
        Update: {
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      sender_receivers: {
        Row: {
          accepted_date: string | null
          id: string
          is_accepted: boolean | null
          receiver_id: string
          send_date: string | null
          sender_id: string
        }
        Insert: {
          accepted_date?: string | null
          id?: string
          is_accepted?: boolean | null
          receiver_id: string
          send_date?: string | null
          sender_id: string
        }
        Update: {
          accepted_date?: string | null
          id?: string
          is_accepted?: boolean | null
          receiver_id?: string
          send_date?: string | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sender_receivers_receiver_id_fkey"
            columns: ["receiver_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sender_receivers_sender_id_fkey"
            columns: ["sender_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      user_game_data: {
        Row: {
          comment: string | null
          finish_date: string | null
          game_meta_data: Json | null
          id: string
          is_favourite: boolean | null
          modified_date: string | null
          progress: number | null
          replay_times: number | null
          score_rate: number | null
          start_date: string | null
          status: string | null
          user_id: string
        }
        Insert: {
          comment?: string | null
          finish_date?: string | null
          game_meta_data?: Json | null
          id: string
          is_favourite?: boolean | null
          modified_date?: string | null
          progress?: number | null
          replay_times?: number | null
          score_rate?: number | null
          start_date?: string | null
          status?: string | null
          user_id: string
        }
        Update: {
          comment?: string | null
          finish_date?: string | null
          game_meta_data?: Json | null
          id?: string
          is_favourite?: boolean | null
          modified_date?: string | null
          progress?: number | null
          replay_times?: number | null
          score_rate?: number | null
          start_date?: string | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_game_data_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
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
