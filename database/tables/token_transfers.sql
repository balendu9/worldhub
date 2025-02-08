CREATE TABLE public.token_transfers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sender_id UUID NOT NULL,
    receiver_id UUID NOT NULL,
    token_id UUID NOT NULL,
    amount DECIMAL NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (sender_id) REFERENCES public.users(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES public.users(id) ON DELETE CASCADE,
    FOREIGN KEY (token_id) REFERENCES public.tokens(id) ON DELETE CASCADE
);
