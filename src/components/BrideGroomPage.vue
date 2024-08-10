<template>
  <div class="container mt-4">
    <h1>Bride and Groom Invitations</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Invitation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guest in guests" :key="guest.id">
          <td>{{ guest.id }}</td>
          <td>{{ guest.invitation }}</td>
          <td>
            <button class="btn btn-primary btn-sm btn-spacing" @click="editGuest(guest)">Edit</button>
            <button class="btn btn-danger btn-sm btn-spacing" @click="deleteGuest(guest.id)">Delete</button>
            <button class="btn btn-secondary btn-sm btn-spacing" @click="copyToClipboard(guest.id)">Copy</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-success" @click="openModal">Add New Person</button>

    <div v-if="showModal" class="modal show" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditing ? 'Edit Invitation' : 'Add New Invitation' }}</h5>
            <button type="button" class="close" @click="closeModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="isEditing ? updateGuest() : addGuest()">
              <div class="form-group">
                <label for="invitation">Invitation:</label>
                <input type="text" class="form-control" id="invitation" v-model="form.invitation" required>
              </div>
              <button type="submit" class="btn btn-primary">{{ isEditing ? 'Update' : 'Add' }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guests: [],
      showModal: false,
      isEditing: false,
      currentGuestId: null,
      form: {
        invitation: ''
      }
    };
  },
  created() {
    this.fetchGuests();
  },
  methods: {
    fetchGuests() {
      fetch('http://54.167.160.229:3000/api/guests')
        .then(response => response.json())
        .then(data => {
          this.guests = data;
        });
    },
    openModal() {
      this.showModal = true;
      document.body.classList.add('modal-open'); // Prevent background scrolling
    },
    closeModal() {
      this.showModal = false;
      this.isEditing = false;
      this.form.invitation = '';
      document.body.classList.remove('modal-open'); // Allow background scrolling
    },
    addGuest() {
      fetch('http://54.167.160.229:3000/api/guests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
        .then(response => response.json())
        .then(data => {
          this.guests.push(data);
          this.closeModal();
        });
    },
    editGuest(guest) {
      this.currentGuestId = guest.id;
      this.form.invitation = guest.invitation;
      this.isEditing = true;
      this.openModal();
    },
    updateGuest() {
      fetch(`http://54.167.160.229:3000/api/guests/${this.currentGuestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
        .then(response => response.json())
        .then(updatedGuest => {
          const index = this.guests.findIndex(guest => guest.id === this.currentGuestId);
          if (index !== -1) {
            this.guests.splice(index, 1, updatedGuest);
          }
          this.closeModal();
        });
    },
    deleteGuest(id) {
      fetch(`http://54.167.160.229:3000/api/guests/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          this.guests = this.guests.filter(guest => guest.id !== id);
        });
    },
    copyToClipboard(guestId) {
      const url = location.origin + "/invitation/" + guestId;
      navigator.clipboard.writeText(url)
        .then(() => {
          // Optionally handle successful copy
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  }
};
</script>

<style scoped>
.btn-spacing {
  margin-right: 5px;
}

.modal-open {
  overflow: hidden;
}
</style>

