export interface Menu {
    portata: string
    piatto: Piatto[]
    
}

export interface Piatto {
    nome: string
    prezzo: number
    descrizione: string
    stato: string
}